from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List

from schemas import Todo

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

todos = [
    {"id": 1, "task": "Buy groceries", "completed": False},
    {"id": 2, "task": "Clean the house", "completed": True},
    {"id": 3, "task": "Do the laundry", "completed": False},
    {"id": 4, "task": "Walk the dog", "completed": False},
    {"id": 5, "task": "Wash the car", "completed": False},
    {"id": 6, "task": "Mow the lawn", "completed": True},
]

@app.get("/todos/", response_model= List[dict])
def get_todos():
    return todos

@app.post("/todos/")
def create_todos(todo: Todo):
    id = len(todos) + 1  # a more robust way to generate id?
    completed = False
    new_todo = {"id": id, **todo.dict(), "completed": completed}
    todos.append(new_todo)
    print(todos)
    return new_todo  

@app.delete('/todos/{id}/')
def delete_todos(id: int):
    for todo in todos:
        if todo['id'] == id:
            todos.remove(todo)
            print(todos)
            return todo
    
    return {"message": "Todo not found"}
