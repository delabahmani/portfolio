import ReactDOMServer from 'react-dom/server';
import { EmailTemplate } from '@/components/contact/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    // Render your React component to an HTML string
    const emailHtml = ReactDOMServer.renderToString(EmailTemplate({ firstName: 'John' }));

    const data = await resend.emails.send({
      from: 'Dela <bahmanidela@gmail.com>',
      to: ['bahmanidela@gmail.com'],
      subject: 'Hello world',
      text: 'This is a plain text version of the email.', // Provide a plain text version of the email
      html: emailHtml, // Use the rendered HTML string
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
