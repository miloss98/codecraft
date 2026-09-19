import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (name.length < 2) return NextResponse.json({ error: "Unesite ime." }, { status: 400 });
  if (!EMAIL_RE.test(email))
    return NextResponse.json({ error: "Unesite ispravan email." }, { status: 400 });
  if (message.length < 10)
    return NextResponse.json({ error: "Poruka je prekratka." }, { status: 400 });

  // TODO: ovdje povezati slanje (Resend, Nodemailer, Formspree...). Za sada samo bilježimo.
  console.log("[contact]", { name, email, message });

  return NextResponse.json({ ok: true });
}
