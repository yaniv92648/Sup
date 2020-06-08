import datetime
import pathlib
import os


class Logger:

    @staticmethod
    def add_to_log(msg):
        log_file = str(pathlib.Path(__file__).parent) + os.sep + 'logs' + os.sep + "user_log.txt"
        date_format = "%d/%m/%Y %H:%M:%S"
        try:
            with open(log_file, 'a') as file:
                file.write(datetime.datetime.now().strftime(date_format) + f": {msg}" + "\n")
        except Exception as e:
            raise Exception(f"Logging '{msg}' failed: {str(e)}")
