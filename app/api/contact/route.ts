import { NextResponse } from "next/server";

import { insertContactSubmission } from "@/lib/db";

export const runtime = "nodejs";

type ContactBody = {
  fullName?: string;
  companyName?: string;
  email?: string;
  service?: string;
  message?: string;
};

function pickString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function isNonEmptyString(value: string): boolean {
  return value.trim().length > 0;
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

  const fullName = pickString(body.fullName);
  const companyName = pickString(body.companyName);
  const email = pickString(body.email);
  const service = pickString(body.service);
  const message = pickString(body.message);

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

  try {
    await insertContactSubmission(payload);
  } catch (err) {
    console.error("[contact] database error", err);
    return NextResponse.json(
      {
        error: "Could not save your message. Please try again later.",
        missing: [] as string[],
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks — we received your message.",
  });
}
