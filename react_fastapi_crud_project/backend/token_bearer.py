from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi import Request, HTTPException
from jose import jwt, JWTError
from dotenv import load_dotenv
import os

load_dotenv()

class JWTBearer(HTTPBearer):
    def __init__(self, auto_error: bool = True):
        super().__init__(auto_error=auto_error)

    async def __call__(self, request: Request):
        credentials: HTTPAuthorizationCredentials = await super().__call__(request)
        if credentials:
            if not credentials.scheme == "Bearer":
                raise HTTPException(status_code=403, detail="Invalid authentication scheme.")
            payload = self.verify_jwt(credentials.credentials)
            if not payload:
                raise HTTPException(status_code=401, detail="Invalid token or expired token.")
            
            return payload

    def verify_jwt(self, jwtoken: str):
        try:
            payload = jwt.decode(jwtoken, os.environ.get("SECRET_KEY"), algorithms=["HS256"])
            return payload
        except JWTError:
            return False
        
