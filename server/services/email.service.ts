import { Resend } from "resend";
import type { ContactFormData } from "@shared/schema";

function getCredentials() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY not configured");
  }
  return {
    apiKey,
    fromEmail: "noreply@byteforger.com",
  };
}

export async function sendContactNotificationEmail(data: ContactFormData) {
  try {
    const { apiKey, fromEmail } = getCredentials();
    const resend = new Resend(apiKey);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a365d;">New Contact Form Submission</h2>
        <hr style="border: none; border-top: 2px solid #eee; margin: 20px 0;" />
        
        <div style="margin: 20px 0;">
          <p><strong style="color: #1a365d;">Name:</strong> ${data.name}</p>
          <p><strong style="color: #1a365d;">Email:</strong> ${data.email}</p>
          <p><strong style="color: #1a365d;">Subject:</strong> ${data.subject}</p>
        </div>
        
        <hr style="border: none; border-top: 2px solid #eee; margin: 20px 0;" />
        
        <div style="background-color: #f7fafc; padding: 15px; border-left: 4px solid #3366cc; margin: 20px 0;">
          <h3 style="color: #1a365d; margin-top: 0;">Message:</h3>
          <p style="color: #4a5568; line-height: 1.6;">${data.message.replace(/\n/g, "<br>")}</p>
        </div>
        
        <hr style="border: none; border-top: 2px solid #eee; margin: 20px 0;" />
        
        <p style="color: #718096; font-size: 12px; text-align: center;">
          This is an automated message from ByteForger contact form. Please reply to ${data.email} to respond.
        </p>
      </div>
    `;

    const response = await resend.emails.send({
      from: fromEmail || "onboarding@resend.dev",
      to: "muhammadalisultan452@gmail.com",
      replyTo: data.email,
      subject: `New Contact: ${data.subject}`,
      html: emailHtml,
    });

    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export async function sendConfirmationEmail(email: string, name: string) {
  try {
    const { apiKey, fromEmail } = getCredentials();
    const resend = new Resend(apiKey);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a365d;">Thank You for Contacting ByteForger</h2>
        <hr style="border: none; border-top: 2px solid #eee; margin: 20px 0;" />
        
        <p style="color: #4a5568; line-height: 1.6;">
          Hi ${name},
        </p>
        
        <p style="color: #4a5568; line-height: 1.6;">
          We've received your message and appreciate you reaching out to ByteForger. 
          Our team will review your inquiry and get back to you within 24 hours.
        </p>
        
        <p style="color: #4a5568; line-height: 1.6;">
          If you have any urgent questions, feel free to give us a call at +1 (234) 567-890.
        </p>
        
        <div style="background-color: #f0f4f8; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="color: #1a365d; margin: 0; font-size: 14px;">
            <strong>ByteForger</strong><br>
            Transforming Your Digital Vision into Reality
          </p>
        </div>
        
        <hr style="border: none; border-top: 2px solid #eee; margin: 20px 0;" />
        
        <p style="color: #718096; font-size: 12px;">
          © 2025 ByteForger. All rights reserved.
        </p>
      </div>
    `;

    const response = await resend.emails.send({
      from: fromEmail || "onboarding@resend.dev",
      to: email,
      subject: "Thank You for Your Message - ByteForger",
      html: emailHtml,
    });

    return response;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw error;
  }
}
