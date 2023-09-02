from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Todo(Base):
    __tablename__ = 'todos'
    id = Column (Integer, primary_key=True, index=True, autoincrement=True)
    task = Column (String, index=True)
    completed = Column (Boolean, default= False)
