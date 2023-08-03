from fastapi import FastAPI
from routes import router
app = FastAPI()

# Include the routes from routes.py
app.include_router(router)
