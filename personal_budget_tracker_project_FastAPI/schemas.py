# Personal Budget tracker 
# Categories: Groceries, Rent, Utilities, Transportation, Entertainment, Clothing, Eating Out, Miscellaneous
# Entries/Expense: Date, Category, Description, Amount

import datetime
from pydantic import BaseModel, Field, validator
from typing import Optional, List

class ErrorResponse(BaseModel):
    type: str = Field(..., description="Type of the error")
    message: str = Field(..., description="Description of the error")

class Category(BaseModel):
    name: str = Field(..., description="Name of the category")
    description: Optional[str] = Field(None, description="Description of the category")

class Expense(BaseModel):
    date: str = Field(..., description="Date of the expense following the format YYYY-MM-DD")
    category: str = Field(..., description="Category of the expense")
    description: Optional[str] = Field(None, description="Description of the expense")
    amount: float = Field(..., description= "Amount of the expense")
    @validator('amount')
    def amount_must_be_positive(cls, v):
        try:
            assert v > 0, 'amount must be positive'
            return v
        except Exception as e:
            return {"Error Type": e.__name__, "Error Messgae": str(e)}
    
    @validator('date')
    def date_must_be_valid(cls, v):
        try:
            format = '%Y-%m-%d'
            parsed_date = datetime.datetime.strptime(v, format)
            return parsed_date.date()

        except Exception as e:
            return {"Error Type": e.__name__, "Error Messgae": str(e)}
            
class CategoryResponseList(BaseModel):
    categories: List[Category] = Field(..., description="List of categories")

class ExpenseResponseList(BaseModel):
    expenses: List[Expense] = Field(..., description="List of expenses")