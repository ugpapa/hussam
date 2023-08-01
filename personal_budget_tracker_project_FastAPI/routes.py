# Create, update, delete, and fetch budget categories and expenses

from fastapi import APIRouter

from schemas import *

router = APIRouter()

categories = []
expenses = []

# create category
@router.post("/categories/",
        tags=['category']
        )

async def create_category(payload: Category):
    categories.append(payload.dict())
    return {"message": "Category created successfully."}


# fetch all categories
@router.get("/categories/",
            tags=['category'])

async def get_categories():
    if categories:
        return CategoryResponseList(categories=categories)
    else:
        return ErrorResponse(type="ValueError", message="No categories found.")

# fetch single category
@router.get("/categories/{category_name}",
            tags=['category'])

async def get_category(category_name: str):
    for category in categories:
        if category["name"] == category_name:
            return category
    return ErrorResponse(type="ValueError", message="Category not found.")

# update category
@router.put("/categories/{category_name}")

async def update_category(category_name: str, payload: Category):
    for category in categories:
        if category["name"] == category_name:
            category["description"] = payload.description
            category["name"] = payload.name
            return {"message": "Category updated successfully."}
    return ErrorResponse(type="ValueError", message="Category not found.")

# delete category
@router.delete("/categories/{category_name}")

async def delete_category(category_name: str):
    for index, category in enumerate(categories):
        if category["name"] == category_name:
            categories.pop(index)
            return {"message": "Category deleted successfully."}
    return ErrorResponse(type="ValueError", message="Category not found.")

