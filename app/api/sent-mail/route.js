// /app/api/send-mail/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sivabanka2002@gmail.com",
      pass: "nuyi ehbf xftq uviz",
    },
  });

  await transporter.sendMail({
    from: "sivabanka2002@gmail.com",
    to: data.email,
    subject: "User Report",
    text: JSON.stringify(data, null, 2),
  });

  return Response.json({ success: true });
}