import { NextResponse } from "next/server";
import { site } from "../../../lib/site-data";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function redirect(request, pathname) {
  return NextResponse.redirect(new URL(pathname, request.url), { status: 303 });
}

export async function POST(request) {
  let form;

  try {
    form = await request.formData();
  } catch {
    return redirect(request, "/contact-error");
  }

  const website = clean(form.get("website"), 200);
  const name = clean(form.get("name"), 100);
  const email = clean(form.get("email"), 254).toLowerCase();
  const phone = clean(form.get("phone"), 30);
  const interest = clean(form.get("interest"), 100) || "Not specified";
  const message = clean(form.get("message"), 3000);

  // Quietly accept bot submissions caught by the honeypot.
  if (website) {
    return redirect(request, "/thank-you");
  }

  if (!name || !emailPattern.test(email) || !message) {
    return redirect(request, "/contact-error?reason=invalid");
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return redirect(request, "/contact-error");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || "Patriot Realty FL <website@patriotrealtyfl.com>",
      to: [site.email],
      reply_to: email,
      subject: `New Patriot Realty lead: ${interest}`,
      html: `
        <h1>New website request</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Interest:</strong> ${escapeHtml(interest)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `
    })
  });

  if (!response.ok) {
    return redirect(request, "/contact-error");
  }

  return redirect(request, "/thank-you");
}
