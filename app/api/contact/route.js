import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // e.g., your Gmail address
        pass: process.env.EMAIL_PASS, // app password
      },
      tls: {
        rejectUnauthorized: false, // <-- ADD THIS to ignore self-signed cert errors
      },
    });

    // Email options
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`, // Your Gmail, with a friendly sender name
      replyTo: email, // visitor’s email so replies go to them
      to: "support@usaac.us",
      subject: `New Contact Form Submission`,
      text: `
Name: ${name}
Email: ${email}

Content:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: "Your message has been sent!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send your message." }),
      { status: 500 }
    );
  }
}
