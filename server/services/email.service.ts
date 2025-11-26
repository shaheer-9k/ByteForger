import { Resend } from "resend";
import type { ContactFormData } from "@shared/schema";

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? "depl " + process.env.WEB_REPL_RENEWAL
    : null;

  if (!xReplitToken) {
    throw new Error("X_REPLIT_TOKEN not found for repl/depl");
  }

  connectionSettings = await fetch(
    "https://" + hostname + "/api/v2/connection?include_secrets=true&connector_names=resend",
    {
      headers: {
        Accept: "application/json",
        X_REPLIT_TOKEN: xReplitToken,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data.items?.[0]);

  if (!connectionSettings || !connectionSettings.settings.api_key) {
    throw new Error("Resend not connected");
  }
  return {
    apiKey: connectionSettings.settings.api_key,
    fromEmail: connectionSettings.settings.from_email,
  };
}

export async function sendContactNotificationEmail(data: ContactFormData) {
  try {
    const { apiKey, fromEmail } = await getCredentials();
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
      to: "info@byteforger.com",
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
    const { apiKey, fromEmail } = await getCredentials();
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
