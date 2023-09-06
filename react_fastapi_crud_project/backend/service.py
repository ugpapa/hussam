from sqlalchemy.orm import Session
from models import Todo as TodoModel, User as UserModel
from schemas import Todo, User
from passlib.hash import argon2
from custom_erros import *
from token_utils import create_access_token, create_refresh_token

def get_all_todos(db: Session, username: str):
    return db.query(TodoModel).join(UserModel).filter(UserModel.username == username).all()

def add_todo(db: Session, todo: Todo, username: str):
    user = db.query(UserModel).filter(UserModel.username == username).first()
    new_todo = TodoModel(task=todo.task, completed=False, user_id=user.id)
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo

def delete_todo(db: Session, id: int, username: str):
    todo = db.query(TodoModel).join(UserModel).filter(TodoModel.id == id, UserModel.username == username).first()
    if todo is None:
        return None
    db.delete(todo)
    db.commit()
    return todo

def update_todo(db: Session, id: int, completed: bool, username: str):
    todo = db.query(TodoModel).join(UserModel).filter(TodoModel.id == id, UserModel.username == username).first()
    if todo is None:
        return None
    todo.completed = completed
    db.commit()
    db.refresh(todo)
    return todo

def get_user(db:Session, username: str):
    user = db.query(UserModel).filter(UserModel.username == username).first()
    return user

def register_user(db:Session, user: User):
    hashed_password = argon2.hash(user.password)
    user_exists = get_user(db, user.username)
    if user_exists:
        raise UserAlreadyExists(user.username)
    new_user = UserModel(username=user.username, password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def login_user(db:Session, user: User):
    user_exists = get_user(db, user.username)
    if not user_exists:
        raise UserDoesNotExist(user.username)
    verified_password = argon2.verify(user.password, user_exists.password)
    if not verified_password:
        raise PasswordDoesNotMatch(user.username)
    
    user_info = {"username": user_exists.username, "password": user_exists.password}
    access_token = create_access_token(user_info)
    refresh_token = create_refresh_token(user_info)
    return {"access_token": access_token, "refresh_token": refresh_token, "token_type": "bearer"}