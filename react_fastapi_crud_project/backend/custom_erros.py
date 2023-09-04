class UserAlreadyExists(Exception):
    def __init__(self, username):
        self.username = username
        self.message = f"User with username {username} already exists."
        super().__init__(self.message)

class UserDoesNotExist(Exception):
    def __init__(self, username):
        self.username = username
        self.message = f"User with username {username} does not exist."
        super().__init__(self.message)

class PasswordDoesNotMatch(Exception):
    def __init__(self, username):
        self.username = username
        self.message = f"Password does not match for user with username {username}."
        super().__init__(self.message)

