from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class CategoryModel(Base):
    __tablename__ = 'categories'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)

class ExpenseModel(Base):
    __tablename__ = 'expenses'
    id = Column(Integer, primary_key=True, index=True)
    category_id = Column(Integer, ForeignKey('categories.id')) # Foreign Key
    category = relationship("CategoryModel") # Get category model in expenses using the relationship
    date = Column(Date)
    description = Column(String)
    amount = Column(Float)
