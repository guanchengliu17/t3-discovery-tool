from flask_restplus import fields

from .extensions import api


user_fields = api.model('User fields', {
    'email': fields.String,
    'password': fields.String,
    'first_name': fields.String,
    'last_name': fields.String,
    'role': fields.String
})

user_credential_fields = api.model('User credential fields', {
    'email': fields.String,
    'password': fields.String,
})

update_user_fields = api.model('Upate user fields', {
    'action': fields.String,
    'data': fields.Nested(user_fields)
})

idea_fields = api.model('Idea fields', {
    'title': fields.String,
    'assignee': fields.String,
    'pitch_approvals': fields.String,
    'title_approvals': fields.String,
    'reviewers': fields.List

})

updateable_idea_fields = api.model('Udateable idea fields', {
    'assignee': fields.String,
    'title': fields.String,
    'details': fields.String,
    'pitch_approvals': fields.String,
    'title_approvals': fields.String
})

update_idea_fields = api.model('Update idea fields', {
    'action': fields.String,
    'data': fields.Nested(updateable_idea_fields)
})

goal_fields = api.model('create a new goal field', {
    'verticals': fields.String,
    'assignee': fields.String,
    'deadline': fields.Integer,
    'total_number': fields.Integer,
    'completed_number': fields.Integer
})