# Create, update, delete, and fetch budget categories and expenses

from fastapi import APIRouter, Depends, HTTPException, status, Response
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
        return {"result": categories} # what you are returning must match the response_model
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
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Category not found')





# create expense
@router.post('/expenses/',
            tags=['expense'],
            response_model = Union[ExpenseResponse, ErrorResponse],
            status_code = status.HTTP_201_CREATED
            )

async def create_expense(payload: Expense, db: Session = Depends(get_db)):
    # get category
    category = db.query(CategoryModel).filter_by(name = payload.category).first()
    if category:
        expense = ExpenseModel(
            category = category,
            date = payload.date,
            category_id = category.id, # get category id from category fetched from categories table
            description = payload.description,
            amount = payload.amount
        )

        # Add expense to db
        db.add(expense)
        db.commit()
        # get expense with expense id which is auto gen by db
        db.refresh(expense)

        expense_response = ExpenseResponse(
            id = expense.amount,
            category = CategoryResponse(
                id = category.id,
                name = category.name,
                description = category.description
            ),
            date = expense.date,
            description = expense.description,
            amount = expense.amount
        )
        
        return expense_response

    else:
        return ErrorResponse(type = 'ValueError', message = 'Category not found.')
        

# fetch all expenses
@router.get('/expenses/',
            tags=['expense'],
            response_model=Union[ExpenseResponseList, ErrorResponse],
            status_code= status.HTTP_200_OK
            )

async def get_expenses(db: Session = Depends(get_db)):
    expenses = db.query(ExpenseModel).all()
    if expenses:
        return {"result": expenses}
    else:
        return ErrorResponse(type="ValueError", message="No expenses found.")

# fetch single expense
@router.get('/expenses/{expense_id}',
            tags=['expense'],
            response_model= Union[ExpenseResponse, ErrorResponse],
            status_code= status.HTTP_200_OK
            )

async def get_expense(expense_id: int, db: Session = Depends(get_db)):
    expense = db.query(ExpenseModel).filter(ExpenseModel.id == expense_id).first()
    if expense:
        return expense
    return ErrorResponse(type="ValueError", message="Expense not found.")

# update expense
@router.put('/expenses/{expense_id}',
            tags=['expense'],
            response_model= Union[ExpenseResponse, ErrorResponse],
            status_code = status.HTTP_200_OK)

async def update_expense(expense_id: int, payload: Expense, db: Session = Depends(get_db)):
    expense = db.query(ExpenseModel).filter(ExpenseModel.id == expense_id).first()
    if expense:
        # Check the category of new expense
        category = db.query(CategoryModel).filter_by(name = payload.category).first()
        if category:
            expense.category = category
            expense.category_id = category.id
            expense.date = payload.date
            expense.description = payload.description
            expense.amount = payload.amount
            db.commit()
            db.refresh(expense)

            # get response
            updated_expense = ExpenseResponse(
                id = expense.id,
                category = CategoryResponse(
                    id = category.id,
                    name = category.name,
                    description = category.description
                ),

                date = expense.date,
                description = expense.description,
                amount = expense.amount
            )
            return updated_expense

        else:
            return ErrorResponse(type="ValueError", message="Category not found.")


    return ErrorResponse(type="ValueError", message="Expense not found.")

# delete expense
@router.delete('/expenses/{expense_id}',
               tags=['expense'],
               status_code= status.HTTP_204_NO_CONTENT
            )

async def delete_expense(expense_id: int, db: Session = Depends(get_db)):
    expense = db.query(ExpenseModel).filter_by(id = expense_id).first()
    if expense:
        db.delete(expense)
        db.commit()
        return Response(status_code= status.HTTP_204_NO_CONTENT)
    
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Expense not found')