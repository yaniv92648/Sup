from flask import Flask\
    # , request, json
from db.mysql_db_layer import MysqlDataLayer

app = Flask(__name__)

data_layer = MysqlDataLayer()


@app.before_first_request
def before_first_request_func():
    global data_layer
    data_layer = MysqlDataLayer()


@app.route('/intro')
def welcome():
    return "Hi Anna! Welcome to Sup!"


# @app.route('/admin/add_topic', methods=['POST'])
# def add_new_topic():
#     new_topic = request.get_json()
#     topic_added = data_layer.add_new_topic(new_topic)
#     response = app.response_class(response=json.dumps(topic_added, default=str),
#                                   status=200,
#                                   mimetype="application/json")
#     return response
#
#
# @app.route('/admin/add_language', methods=['POST'])
# def add_new_language():
#     new_language = request.get_json()
#     language_added = data_layer.add_new_language(new_language)
#     response = app.response_class(response=json.dumps(language_added, default=str),
#                                   status=200,
#                                   mimetype="application/json")
#     return response
#
#
# @app.route('/user/sign-up', methods=['POST'])
# def add_new_user():
#     new_user = request.get_json()
#     user_added = data_layer.add_new_user(new_user)
#     response = app.response_class(response=json.dumps(user_added, default=str),
#                                   status=200,
#                                   mimetype="application/json")
#     return response
#
#
# @app.route('/user/')
# def get_user_profile_by_id():
#     user_id = request.get_json()
#     user_profile = MysqlDataLayer().get_user_by_id(user_id)
#     response = app.response_class(response=json.dumps(user_profile, default=str),
#                                   status=200,
#                                   mimetype="application/json")
#     return response


if __name__ == '__main__':
    app.run(debug=True)
