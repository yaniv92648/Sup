import mysql.connector
from decouple import config
from model.topic import Topic


class MysqlDataLayer:

    def __init__(self):
        self.__mydb = mysql.connector.connect(
            host=config("HOST"),
            user=config('MYSQL_USER'),
            passwd=config('PASSWORD'),
            database=config('DATABASE')
        )
        self.__mydb.autocommit = False

    def add_new_topic(self, new_topic):
        topic_name = new_topic['topic_name']
        new_topic = Topic(topic_name)
        cursor = self.__mydb.cursor()
        try:
            sql = "INSERT INTO sup.topics (topic_name, created_at)" \
                  " VALUES (%s, %s)"
            val = (
                new_topic.topic_name,
                new_topic.created_at,
            )
            cursor.execute(sql, val)
            self.__mydb.commit()
            return cursor.rowcount
        finally:
            cursor.close()

    def get_user_by_id(self, user_id):
        user_id = int(user_id['user_id'])
        cursor = self.__mydb.cursor(buffered=True, dictionary=True)
        try:
            sql = "SELECT * FROM user WHERE user_id = %s"
            val = (user_id,)
            cursor.execute(sql, val)
            self.__mydb.commit()
            return cursor.fetchone()
        finally:
            cursor.close()

    def shutdown_db(self):
        self.__mydb.close()
