from sqlalchemy.orm import Session
from models import Todo as TodoModel
from schemas import Todo

def get_all_todos(db: Session):
    return db.query(TodoModel).all()

def add_todo(db: Session, todo: Todo):
    new_todo = TodoModel(task=todo.task, completed=False)
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo

def delete_todo(db: Session, id: int):
    todo = db.query(TodoModel).filter(TodoModel.id == id).first()
    if todo is None:
        return None
    db.delete(todo)
    db.commit()
    return todo

def update_todo(db: Session, id: int, completed: bool):
    todo = db.query(TodoModel).filter(TodoModel.id == id).first()
    if todo is None:
        return None
    todo.completed = completed
    db.commit()
    db.refresh(todo)
    return todo
