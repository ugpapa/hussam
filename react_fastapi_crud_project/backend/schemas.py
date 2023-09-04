from pydantic import BaseModel

class Todo(BaseModel):
    task: str

class TodoResponse(BaseModel):
    id: int
    task: str
    completed: bool

class TodoUpdate(BaseModel):
    completed: bool

class User(BaseModel):
    username: str
    password: str
