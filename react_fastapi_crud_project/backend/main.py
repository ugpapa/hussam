from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from base import get_db
from schemas import Todo, TodoResponse, TodoUpdate
from service import get_all_todos, add_todo, delete_todo, update_todo

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/todos/", response_model=List[TodoResponse])
def get_todos(db: Session = Depends(get_db)):
    return get_all_todos(db)

@app.post("/todos/")
def create_todos(todo: Todo, db: Session = Depends(get_db)):
    return add_todo(db, todo)

@app.delete('/todos/{id}/')
def delete_todos(id: int, db: Session = Depends(get_db)):
    todo = delete_todo(db, id)
    if todo is None:
        return {"message": "Todo not found"}
    return {"message": "Todo deleted"}

@app.put('/todos/{id}/')
def update_todos(id: int, todo_update: TodoUpdate, db: Session = Depends(get_db)):
    todo = update_todo(db, id, todo_update.completed)
    if todo is None:
        return {"message": "Todo not found"}
    return {"message": "Todo updated"}
