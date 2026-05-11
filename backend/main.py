from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    fullName: str = Field(..., min_length=1)
    companyName: str = Field(..., min_length=1)
    email: str = Field(..., min_length=1)
    service: str = Field(..., min_length=1)
    message: str = Field(..., min_length=1)


@app.post("/api/contact")
def submit_contact(form: ContactForm):
    # Reject whitespace-only values (Pydantic min_length counts stripped length for empty-looking strings)
    fields = {
        "fullName": form.fullName.strip(),
        "companyName": form.companyName.strip(),
        "email": form.email.strip(),
        "service": form.service.strip(),
        "message": form.message.strip(),
    }
    empty_keys = [k for k, v in fields.items() if not v]
    if empty_keys:
        raise HTTPException(
            status_code=400,
            detail=f"These fields cannot be empty: {', '.join(empty_keys)}",
        )

    print("--- Contact form submission ---")
    for key, value in fields.items():
        print(f"  {key}: {value}")
    print("-------------------------------")

    return {"success": True, "message": "Thank you — we received your message."}
