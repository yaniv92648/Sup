from flask import Flask, request
from bson.json_util import dumps
from db.mysql_db_layer import MysqlDataLayer

app = Flask(__name__)

data_layer = None


@app.before_first_request
def before_first_request_func():
    global data_layer
    data_layer = MysqlDataLayer()


@app.route('/user/')
def get_user_profile_by_id():
    user_id = request.get_json()
    user_profile = MysqlDataLayer().get_user_by_id(user_id)
    response = app.response_class(response=dumps(user_profile, default=str),
                                  status=200,
                                  mimetype="application/json")
    return response


if __name__ == '__main__':
    app.run(debug=True)
