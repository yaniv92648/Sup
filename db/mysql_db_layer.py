import mysql.connector
from decouple import config


class MysqlDataLayer:

    def __init__(self):
        self.__mydb = mysql.connector.connect(
            host=config("HOST"),
            user=config('MYSQL_USER'),
            passwd=config('PASSWORD'),
            database=config('DATABASE')
        )
        self.__mydb.autocommit = False

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
