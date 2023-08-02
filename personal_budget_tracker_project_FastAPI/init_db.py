from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://postgres@localhost/budget_cal" 
engine = create_engine(DATABASE_URL)

try:
    # Attempt to connect to the database
    connection = engine.connect()
    print("Connection to database was successful!")
except Exception as e:
    # Handle connection errors
    print(f"An error occurred while connecting to the database: {e}")
finally:
    # Always make sure to close the connection
    connection.close()

# Create a session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)