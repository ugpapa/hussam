from fastapi import FastAPI, Field, Depends, APIRouter
from pydantic import BaseModel


app = FastAPI()

# Defining a simple API endpoint with HTTP GET method
@app.get("/")
def read_root():
    return {"Hello": "World"}

# Define an API endpoint with HTTP POST method
@app.post("/comment")
def create_item():
    item = {"comment_id": 123, "comment": "Foo is great!"}
    return item # In real life, front end will send a post request with a json body including the item

# Path parameters
@app.get("items/{item_id}")
def get_item(item_id: int):
    return {"item_id": item_id}

# Query parameters (additional data in the url as key-value pairs)
@app.get("items/")
def get_items(skip: int =0, limit: int =10):
    return {"skip": skip, "limit": limit}

# Request body
class Item(BaseModel):
    name: str 
    price: float = Field(..., gt=0, description="The price must be greater than zero")
    is_offer: bool = None

@app.post("/items/") # Data sent to this route will be parsed and validated against the Item model
def create_item(item: Item):
    return item                 



@app.put("items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_id": item_id, **item.dict()}

class advItem(BaseModel):
    id: int
    name: str
    is_featured: bool = False
    is_verified: bool = False

@app.put("items/{item_id}")
def update_item(item_id: int, item: advItem):
    return {"item_id": item_id, **item.dict()}

class Item(BaseModel):
    name: str
    description: str = None
    price: float

# Response Models
@app.get("items/{item_id}", response_model=Item)
def get_item(item_id: int):
    return {"name": "Widget", "price": 10.99} # will automatically set description to None

# Explicitly set status code
@app.get("items/{item_id}", status_code=200)
def get_item(item_id: int):
    return {"name": "Widget", "price": 10.99}

# or
@app.get("items/{item_id}")
def get_item(item_id: int):
    return {"name": "Widget", "price": 10.99}, 200

# Using depends with APIRouter
router = APIRouter()

# Shared dependency
def get_user_token():
    return {"token": "fakeuser"}

@router.get("items/")
async def get_items(token: str = Depends(get_user_token)):
    return {"token": token}


@router.get("items/{item_id}")
async def get_item(item_id: int, token: str = Depends(get_user_token)):
    return {"token": token, "item_id": item_id}

app.include_router(router, prefix="/v1")
