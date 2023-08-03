# Personal Budget tracker 
# Categories: Groceries, Rent, Utilities, Transportation, Entertainment, Clothing, Eating Out, Miscellaneous
# Entries/Expense: Date, Category, Description, Amount

import datetime
from pydantic import BaseModel, Field, validator
from typing import Optional, List, Union

class ErrorResponse(BaseModel):
    type: str = Field(..., description="Type of the error")
    message: str = Field(..., description="Description of the error")

class Category(BaseModel):
    name: str = Field(..., description="Name of the category")
    description: Optional[str] = Field(None, description="Description of the category")

class CategoryResponse(BaseModel):
    id: int = Field (..., description="Auto generated category ID")
    name: str = Field(..., description="Name of the category")
    description: Optional[str] = Field(None, description="Description of the category")

class Expense(BaseModel):
    category: str = Field(..., description="Category of the expense")
    date: Union[str, datetime.date] = Field(..., description="Date of the expense following the format YYYY-MM-DD")
    description: Optional[str] = Field(None, description="Description of the expense")
    amount: float = Field(..., description= "Amount of the expense")
    
    @validator('amount')
    def amount_must_be_positive(cls, v):
        if v<=0:
            raise ValueError('Amount must be a positive number')
        return v
    
    @validator('date')
    def date_must_be_valid(cls, v):
        try:
            if not isinstance(v, datetime.date):
                format = '%Y-%m-%d'
                parsed_date = datetime.datetime.strptime(v, format)
                return parsed_date.date()
            else:
                return v

        except ValueError:
            raise ValueError(f"Incorrect data format, should be YYYY-MM-DD, got {v}")
            
class ExpenseResponse(BaseModel):
    id: int = Field(description="DB generated primary key")
    category: CategoryResponse
    date: Union[str, datetime.date] = Field(..., description="Date of the expense")
    description: Optional[str] = Field(None, description="Description of the expense")
    amount: float = Field(..., description="Amount of the expense")
    

class ExpenseResponseList(BaseModel):
    result: List[ExpenseResponse] 
    
class CategoryResponseList(BaseModel):
    result: List[CategoryResponse]