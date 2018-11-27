from datetime import datetime

from marshmallow_mongoengine import ModelSchema

from ..extensions import db
class Details(db.EmbeddedDocument):
    url = db.StringField(default=None)
    description = db.StringField(default=None)
    network = db.StringField(default=None)



class Idea(db.Document):
  creator_id = db.StringField()
  assignee = db.StringField()
  assignee_id = db.StringField(default=None, null=True)
  title = db.StringField(max_length=255)
  details = db.EmbeddedDocumentField(Details)
  idea_type = db.StringField(default="draft", validation=lambda idea_type: idea_type in ["draft", "pitch"])
  status = db.StringField(default="drafted", validation=lambda status: status in ["new",  "approved", "parked", "rejected"])
  created_at = db.DateTimeField(default=datetime.utcnow)
  updated_at = db.DateTimeField(default=datetime.utcnow)
  approve_by_admin = db.IntField(default=0)
  reviewers = db.ListField(field=db.DictField(), default=lambda: [])
  pitch_approvals = db.ListField(field=db.DictField(null=True), default=lambda: [])
  title_approvals = db.ListField(field=db.DictField(null=True), default=lambda: [])
  vertical = db.StringField()
  meta = {'collection': 'ideas'}

class IdeaSchema(ModelSchema):
  class Meta:
    model = Idea

idea_schema = IdeaSchema()
ideas_schema = IdeaSchema(many=True)