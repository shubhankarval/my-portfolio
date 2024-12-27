"use server";

import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import ContactEmail from "@components/emails/ContactEmail";

import { type ContactFormData } from "./schema";

export async function sendEmail(contactData: ContactFormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const emailHtml = await render(<ContactEmail contactData={contactData} />);

  const mailOptions = {
    from: {
      name: "Shubhankar's Portfolio",
      address: process.env.SENDER_EMAIL as string,
    },
    to: process.env.RECIEVER_EMAIL,
    subject: contactData.subject,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);

    return true;
  } catch {
    return false;
  }
}
