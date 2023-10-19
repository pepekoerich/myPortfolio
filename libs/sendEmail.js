"use server";

import ContactFormEmail from "@/email/ContactFormEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const emailSender = formData.get("email");
  const messageSender = formData.get("message");
 
  let data
  try {
    data = await resend.emails.send({
      from: "Pedro K. Portfólio <onboarding@resend.dev>",
      to: ["pedrokoerich27@gmail.com"],
      subject: `Contato - ${emailSender}`,
      text: `${messageSender}`,
      reply_to: `${emailSender}`,
      react: <ContactFormEmail message={messageSender} email={emailSender}/>
    });
  } catch (error) {
    return {
      error
    }
  }
  return {
    data,
  }

};
