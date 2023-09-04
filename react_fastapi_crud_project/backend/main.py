from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from sqlalchemy.orm import Session

from typing import List

from base import get_db

from token_bearer import JWTBearer

from schemas import (Todo,
                    TodoResponse,
                    TodoUpdate,
                    User
                    )

from service import (get_all_todos,
                    add_todo,
                    delete_todo,
                    update_todo,
                    register_user,
                    login_user
                    )

from custom_erros import (UserAlreadyExists,
                        UserDoesNotExist,
                        PasswordDoesNotMatch
                        )

from token_utils import (create_access_token,
                        create_refresh_token
                        )
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/todos/", response_model=List[TodoResponse], tags=["todos"])
def get_todos(db: Session = Depends(get_db), payload: dict= Depends(JWTBearer())):
    return get_all_todos(db, payload["username"])

@app.post("/todos/", tags=["todos"])
def create_todos(todo: Todo, db: Session = Depends(get_db), payload: dict= Depends(JWTBearer())):
    return add_todo(db, todo, payload["username"])

@app.delete('/todos/{id}/', tags=["todos"])
def delete_todos(id: int, db: Session = Depends(get_db), payload: dict= Depends(JWTBearer())):
    todo = delete_todo(db, id, payload["username"])
    if todo is None:
        return {"message": "Todo not found"}
    return {"message": "Todo deleted"}

@app.put('/todos/{id}/', tags=["todos"])
def update_todos(id: int, todo_update: TodoUpdate, db: Session = Depends(get_db), payload: dict= Depends(JWTBearer())):
    todo = update_todo(db, id, todo_update.completed, payload["username"])
    if todo is None:
        return {"message": "Todo not found"}
    return {"message": "Todo updated"}

@app.post('/register/', tags=["users"])
def register_user_with_username(user: User, db: Session = Depends(get_db)):
    try:
        return register_user(db, user)
    except UserAlreadyExists as e:
        return JSONResponse(status_code=400, content={"message": str(e)})
    
@app.post('/login/', tags=["users"])
def login_user_with_username(user: User, db: Session = Depends(get_db)):
    try:
        return login_user(db, user)
    except UserDoesNotExist as e:
        return JSONResponse(status_code=400, content={"message": str(e)})
    except PasswordDoesNotMatch as e:
        return JSONResponse(status_code=400, content={"message": str(e)})

@app.post('/token/', tags=["token"])
def get_token(user_info: User, db: Session = Depends(get_db)):
    try:
        user_details = login_user(db, user_info)
    except UserDoesNotExist as e:
        return JSONResponse(status_code=400, content={"message": str(e)})
    except PasswordDoesNotMatch as e:
        return JSONResponse(status_code=400, content={"message": str(e)})
    
    user_info = {"username": user_details.username, "password": user_details.password}
    access_token = create_access_token(user_info)
    refresh_token = create_refresh_token(user_info)
    return {"access_token": access_token, "refresh_token": refresh_token, "token_type": "bearer"}