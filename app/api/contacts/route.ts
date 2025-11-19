import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Setup Nodemailer transport (Gmail example)
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your email
        pass: process.env.MAIL_PASS, // app password
      },
    });

    await transport.sendMail({
      from: process.env.MAIL_USER,
      to: "princessidebuemi@gmail.com", // where messages go
      subject: `New Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
    });

    return NextResponse.json(
      { success: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);
    return NextResponse.json(
      { error: "Failed to send message. Try again later." },
      { status: 500 }
    );
  }
}
