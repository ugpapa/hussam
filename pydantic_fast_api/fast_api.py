from fast_api import FastAPI
from pydantic import BaseModel, Field

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