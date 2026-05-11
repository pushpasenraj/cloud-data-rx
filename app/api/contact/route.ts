import { NextResponse } from "next/server";

type ContactBody = {
  fullName?: unknown;
  companyName?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body.", missing: [] as string[] },
      { status: 400 },
    );
  }

  const fullName = body.fullName;
  const companyName = body.companyName;
  const email = body.email;
  const service = body.service;
  const message = body.message;

  const missing: string[] = [];
  if (!isNonEmptyString(fullName)) missing.push("fullName");
  if (!isNonEmptyString(companyName)) missing.push("companyName");
  if (!isNonEmptyString(email)) missing.push("email");
  if (!isNonEmptyString(service)) missing.push("service");
  if (!isNonEmptyString(message)) missing.push("message");

  if (missing.length > 0) {
    return NextResponse.json(
      { error: "All fields are required.", missing },
      { status: 400 },
    );
  }

  const payload = {
    fullName: fullName.trim(),
    companyName: companyName.trim(),
    email: email.trim(),
    service: service.trim(),
    message: message.trim(),
  };

  console.log("[contact]", payload);

  return NextResponse.json({
    success: true,
    message: "Thanks — we received your message.",
  });
}
