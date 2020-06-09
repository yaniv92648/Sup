import datetime


class User:
    def __init__(self, user_object):
        self.google_user_name = user_object["username"]
        self.google_mail = user_object["email"]
        self.first_name = ""
        self.last_name = ""
        self.link_to_photo = ""
        self.age_group = user_object["age_range"]
        self.language = []  # get list from object then DB
        self.topics = []    # get list from object then DB
        self.interests_free_form = ""
        self.description = ""
        self.created_at = 0
        self.set_created_date()

    def set_created_date(self):
        if self.created_at == 0:
            self.created_at = datetime.datetime.now().isoformat()

    def set_language(self, user_object):
        for each_language in user_object["language"]:
            self.language = self.language.append(each_language)

