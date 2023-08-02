# Create, update, delete, and fetch budget categories and expenses

from fastapi import APIRouter, Depends, status, Response
from sqlalchemy.orm import Session
from typing import List

from schemas import *
from models import *
from init_db import SessionLocal

# Create session handler
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

router = APIRouter()

categories = []
expenses = []

# create category
@router.post("/categories/",
        tags=['category'],
        response_model = CategoryResponse,
        status_code = status.HTTP_201_CREATED
        )

async def create_category(payload: Category, db: Session = Depends(get_db)):
    db_category = CategoryModel(name = payload.name, description = payload.description)
    db.add(db_category)
    db.commit()
    # reflect any automatic changes at the db side
    db.refresh(db_category) # will now have the auto-gen id
    return db_category

# fetch all categories
@router.get("/categories/",
            tags=['category'],
            response_model=Union[CategoryResponseList, ErrorResponse],
            status_code = status.HTTP_200_OK
            )

async def get_categories(db: Session = Depends(get_db)):
    categories = db.query(CategoryModel).all()
    if categories:
        return {"response": categories} # what you are returning must match the response_model
    else:
        return ErrorResponse(type="ValueError", message="No categories found.")

# fetch single category
@router.get("/categories/{category_id}",
            tags=['category'],
            response_model = Union[CategoryResponse, ErrorResponse],
            status_code = status.HTTP_200_OK
            )

async def get_category(category_id: int, db: Session = Depends(get_db)):
    category = db.query(CategoryModel).filter(CategoryModel.id == category_id).first()
    if category:
        return category
    return ErrorResponse(type="ValueError", message="Category not found.")

# update category
@router.put("/categories/{category_id}",
             tags=['category'],
             response_model = Union[CategoryResponse, ErrorResponse],
             status_code = status.HTTP_200_OK
            )

async def update_category(category_id: int, payload: Category, db: Session = Depends(get_db)):
    category = db.query(CategoryModel).filter(CategoryModel.id == category_id).first()
    if category:
        category.name = payload.name
        category.description = payload.description
        # commit to db
        db.commit()
        return category

    return ErrorResponse(type="ValueError", message="Category not found.")

# delete category
@router.delete("/categories/{category_id}",
            tags=['category'],
            status_code = status.HTTP_204_NO_CONTENT
            
            )

async def delete_category(category_id: int, db : Session = Depends(get_db)):
    category = db.query(CategoryModel).filter(CategoryModel.id == category_id).first() 
    if category:
        db.delete(category)
        db.commit()

    return Response(status_code = status.HTTP_204_NO_CONTENT)






# create expense
@router.post('/expenses/', tags=['expense'])
async def create_expense(payload: Expense):
    expenses.append(payload.dict())
    return {"message": "Expense created successfully."}

# fetch all expenses
@router.get('/expenses/',
            tags=['expense'],
            response_model=Union[ExpenseResponseList, ErrorResponse]
            )

async def get_expenses():
    if expenses:
        return ExpenseResponseList(expenses=expenses)
    else:
        return ErrorResponse(type="ValueError", message="No expenses found.")

# fetch single expense
@router.get('/expenses/{id}', tags=['expense'])

async def get_expense(id: int):
    for expense in expenses:
        if expense["id"] == id:
            return expense
    return ErrorResponse(type="ValueError", message="Expense not found.")

# update expense
@router.put('/expenses/{id}', tags=['expense'])

async def update_expense(id: int, payload: Expense):
    for expense in expenses:
        if expense["id"] == id:
            expense["id"] = payload.id
            expense["date"] = payload.date
            expense["category"] = payload.category
            expense["description"] = payload.description
            expense["amount"] = payload.amount
            return {"message": "Expense updated successfully."}
    return ErrorResponse(type="ValueError", message="Expense not found.")

# delete expense
@router.delete('/expenses/{id}', tags=['expense'])

async def delete_expense(id: int):
    for index, expense in enumerate(expenses):
        if expense["id"] == id:
            expenses.pop(index)
            return {"message": "Expense deleted successfully."}
    return ErrorResponse(type="ValueError", message="Expense not found.")