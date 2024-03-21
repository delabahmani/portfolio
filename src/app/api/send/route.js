// import { EmailTemplate } from "@/components/contact/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message, name } = await req.json();
  console.log(email, subject, message, name);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['bahmanidela@gmail.com'],
      subject: subject,
      react: (
        <>
          <h2>{subject}</h2>
          <h3>From: {name}, {email}</h3>
          <p>Message: {message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
