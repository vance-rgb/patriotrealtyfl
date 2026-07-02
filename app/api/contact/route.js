import { NextResponse } from "next/server";

export async function POST(request) {
  const form = await request.formData();
  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const message = String(form.get("message") || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  // Replace this with Resend, SendGrid, a CRM webhook, or Vercel KV storage.
  console.log("New Patriot Realty FL contact request", { name, email, message });

  return NextResponse.redirect(new URL("/thank-you", request.url), { status: 303 });
}
