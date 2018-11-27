from datetime import datetime
import uuid
import json

from flask_restplus import Resource, reqparse
from flask_jwt_extended import get_jwt_identity
from flask import request

from ..extensions import api
from ..models import User, Idea, idea_schema, ideas_schema
from ..decorators import admin_required, login_required
from ..fields import idea_fields, update_idea_fields
import logging

idea_parser = reqparse.RequestParser()
idea_parser.add_argument('type', type=str, help='Must be one of [draft, pitch, title]')
idea_parser.add_argument('user_id', type=str, help="User's public_id")


class IdeasEndpoint(Resource):

  @api.expect(idea_fields)
  def post(self):
    """Create a new idea"""
    request_body = request.get_json(force=True)

    idea, error = idea_schema.load(request_body)
    try:
      new_idea = idea.save()
    except Exception as e:
      return str(e), 400
      # TODO: Fan -- why there is two elements in the return lists?
    return idea_schema.dump(new_idea), 200

  @api.expect(idea_fields)
  def put(self):
    """Return a list of ideas with filters"""
    filters = request.get_json(force=True)
    print(filters)
    ideas = Idea.objects(__raw__=filters)
    return ideas_schema.dump(ideas)


class IdeaEndpoint(Resource):
  goals_logger = logging.getLogger('Goals')
  goals_logger.setLevel(logging.NOTSET)
  def get(self, idea_id):
    """Return a specific user entry."""

    idea = Idea.objects.get_or_404(id=idea_id)
    return idea_schema.dump(idea)

  @api.expect(idea_fields)
  def patch(self, idea_id):
    """Update a idea"""
    idea = Idea.objects.get_or_404(id=idea_id)
    idea_patch = request.get_json(force=True)
    try:
        idea.update(**idea_patch)
        # if idea_patch.get("idea_type") == "pitch" and idea_patch.get("approve_by_admin") == 0:
        #    idea.update(status="rejected", updated_at=datetime.utcnow)
        # if idea_patch.get("idea_type") == "pitch" and idea_patch.get("approve_by_admin") == 1:
        #    idea.update(status="parked", updated_at=datetime.utcnow)
        # if idea_patch.get("idea_type") == "pitch" and idea_patch.get("approve_by_admin") == 2:
        #    idea.update(status="approved", updated_at=datetime.utcnow)
    except Exception as e:
      return str(e),  400
    idea = Idea.objects.get_or_404(id=idea_id)



    return "Successed Saved", 200

  @api.expect(idea_fields)
  def put(self, idea_id):
    """Add a reviwer"""
    idea = Idea.objects.get_or_404(id=idea_id)
    raw_json = request.get_json(force=True)
    print("hello world")
    print(raw_json)
    reviewers = idea.reviewers
    reviewers.append(raw_json)

    idea_patch = {
      "reviewers":reviewers
    }
    idea.update(**idea_patch)

    self.goals_logger.error("ssss")
    print(len(reviewers))

    print(reviewers)
    if len(reviewers) == 2:
      reviewer_1 = reviewers[0]
      reviewer_2 = reviewers[1]
      print(reviewer_1['status'] == 'rejected')
      print(reviewer_2['status'] == 'rejected')
      if reviewer_1['status'] == 'approved' and reviewer_2['status'] == 'approved':
        idea.update(status="approved", updated_at=datetime.now)
      elif reviewer_1['status'] == 'rejected' and reviewer_2['status'] == 'rejected':
        print("what ???")
        idea.update(status="rejected", updated_at=datetime.now)
      else:
        idea.update(status="parked", updated_at=datetime.now)
    return idea_schema.dump(idea)


  def delete(self, idea_id):
    """Delete an idea"""

    idea = Idea.objects.get_or_404(id=idea_id)
    return idea.delete()