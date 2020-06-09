import datetime


class Topic:

    def __init__(self, name):
        self.topic_name = name
        self.created_at = 0
        self.set_created_date()

    def set_created_date(self):
        if self.created_at == 0:
            self.created_at = datetime.datetime.now().isoformat()
