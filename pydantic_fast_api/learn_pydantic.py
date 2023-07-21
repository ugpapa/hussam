from pydantic import BaseModel, Field, validator

# Data validation
class User(BaseModel):
    id: int
    username: str = Field(..., min_length=3, max_length=50)
    email: str = Field(..., regex=r"[^@]+@[^@]+\.[^@]+")
    age: int = Field(..., ge=0)

# Define some data
user = {
    "id":1,
    "username": "adminadler",
    "email": f"admin@adler.com",
    "age": 30
}

# Parsing and serializing (to and from python objects and json)
user_data_json = '{"username": "john_doe","password":"123456", "email": "john@example.com", "age": 30, "id": 1}'
other_user = User.parse_raw(user_data_json)
user_dict = other_user.dict()

print(User(**user))
print(other_user)
print(user_dict)
print(other_user.json())

# Model configuration
class Employee(BaseModel):
    id: int
    name: str
    age: int
    class Config:
        allow_population_by_alias = True
        alias_generator = lambda string: string + '_alias' # add _alias to all fields
emp = {"id_alias":1, "name_alias":"John Doe", "age_alias":30}

employee = Employee(**emp)
print(employee)


class User(BaseModel):
    user_id: int = Field(..., alias="id")
    full_name: str = Field(..., alias="name")

# Data from an external API with different field names
data = {
    "id": 123,
    "name": "John Doe",
}

# Creating a User instance using the external data with aliases
user = User(**data)

# Accessing fields using the model's defined names, not the aliases
print(user.user_id)     # Output: 123
print(user.full_name)   # Output: John Doe


# Pydantic Custom Validators
class Listings(BaseModel):
    id: int
    title: str
    price: float
    description: str

    @validator('price')
    def price_must_be_positive(cls, value): # follow the convention of using cls as the first argument for class methods
        if value < 0:
            raise ValueError('price must be positive')
        return value
    

# Data from an external API with different field names
data = {
    "id": 123,
    "title": "iPhone 12",
    "price": 2,
    "description": "A brand new iPhone 12"
}

print(Listings(**data))
