from flask import Flask, request

app = Flask(__name__)


@app.before_first_request
def before_first_request_func():
    datalayer = MysqlDataLayer()


if __name__ == '__main__':
    app.run(debug=True)
