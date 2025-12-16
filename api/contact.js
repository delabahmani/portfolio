import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Portfolio <contact@delara.live>",
      to: ["delabahmani@gmail.com"],
      subject: `New contact submission from ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
