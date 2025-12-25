import { Resend } from "resend";
import type { ContactFormData } from "@shared/schema";

function getCredentials() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY not configured");
  }
  return {
    apiKey,
    fromEmail: "onboarding@resend.dev",
  };
}

const styles = {
  container: `
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    color: #333333;
  `,
  header: `
    padding: 30px 0;
    text-align: left;
    border-bottom: 2px solid #f1f1f1;
    margin-bottom: 30px;
  `,
  headerText: `
    color: #111111;
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.5px;
  `,
  content: `
    line-height: 1.6;
    font-size: 16px;
    color: #444444;
  `,
  footer: `
    margin-top: 40px;
    border-top: 1px solid #eaeaea;
    padding-top: 20px;
    color: #888888;
    font-size: 12px;
  `,
  button: `
    display: inline-block;
    background-color: #000000;
    color: #ffffff;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    margin-top: 10px;
  `,
  label: `
    color: #666666;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 4px;
    display: block;
  `,
  value: `
    color: #111111;
    font-size: 16px;
    margin: 0;
    font-weight: 400;
  `
};

export async function sendContactNotificationEmail(data: ContactFormData) {
  try {
    const { apiKey, fromEmail } = getCredentials();
    const resend = new Resend(apiKey);

    const emailHtml = `
      <div style="${styles.container}">
        <div style="${styles.header}">
          <h1 style="${styles.headerText}">New Lead: ${data.name}</h1>
        </div>
        
        <div style="${styles.content}">
          <p style="margin-top: 0; margin-bottom: 24px;">
            You have received a new inquiry through the ByteForger contact form. 
            The details of the submission are listed below.
          </p>
          
          <div style="margin-bottom: 30px;">
            <a href="https://docs.google.com/spreadsheets/d/1OiDpR6sw3FDPNbZ0-LnVG-n1zDJGZ8gGYAWofifq0jI/edit?gid=0#gid=0" style="${styles.button}">View All Responses in Sheets</a>
          </div>

          <div style="background-color: #f9f9f9; padding: 25px; border-radius: 4px; border: 1px solid #eee;">
            <label style="${styles.label}">Name</label>
            <p style="${styles.value}">${data.name}</p>

            <label style="${styles.label}">Email</label>
            <p style="${styles.value}">
              <a href="mailto:${data.email}" style="color: #111; text-decoration: none;">${data.email}</a>
            </p>

            <label style="${styles.label}">Subject</label>
            <p style="${styles.value}">${data.subject}</p>

            <label style="${styles.label}">Message</label>
            <p style="${styles.value}" style="white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
        
        <div style="${styles.footer}">
          <p>Sent via ByteForger Notification System</p>
        </div>
      </div>
    `;

    // Plain text version for better deliverability
    const emailText = `
New Lead Received

You have received a new inquiry from ${data.name}.

Details:
- Name: ${data.name}
- Email: ${data.email}
- Subject: ${data.subject}
- Message:
${data.message}

View all responses: https://docs.google.com/spreadsheets/d/1OiDpR6sw3FDPNbZ0-LnVG-n1zDJGZ8gGYAWofifq0jI/edit?gid=0#gid=0
    `;

    const response = await resend.emails.send({
      from: "ByteForger Team <info@byteforger.com>",
      to: "awaisraza9114@gmail.com",
      replyTo: data.email,
      subject: `New Inquiry: ${data.subject}`,
      html: emailHtml,
      text: emailText,
    });

    console.log("Notification email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending notification email:", error);
    // Log the error but don't throw it immediately to avoid crashing the request if just email fails
    // But re-throwing is better for the route handler to know.
    if (error && typeof error === 'object' && 'response' in error) {
      console.error("Resend API Error Body:", JSON.stringify((error as any).response?.body, null, 2));
    }
    throw error;
  }
}

export async function sendConfirmationEmail(email: string, name: string) {
  try {
    const { apiKey, fromEmail } = getCredentials();
    const resend = new Resend(apiKey);
    const firstName = name.split(' ')[0];

    const clientEmailHtml = `
      <div style="${styles.container}">
        <div style="${styles.header}">
          <h1 style="${styles.headerText}">Hi, ${firstName}</h1>
        </div>

        <div style="${styles.content}">
          <p style="margin-bottom: 24px;">
            Thank you for reaching out to ByteForger! We have successfully received your inquiry regarding <strong>"${name}"</strong>.
          </p>
          
          <p style="margin-bottom: 24px;">
            Our team is currently reviewing your message and we are excited to learn more about how we can assist you. 
            We strive to respond to all inquiries as quickly as possible, typically within 24 hours.
          </p>

          <p style="margin-bottom: 24px;">
            In the meantime, feel free to browse our portfolio or follow us on our social media channels to see our latest work. 
            If you have any urgent details to add, you can reply directly to this email.
          </p>

          <p style="margin-bottom: 40px; border-left: 2px solid #000; padding-left: 15px; font-style: italic; color: #555;">
            "We believe in forging technology into solutions."
          </p>
          
          <div style="margin-top: 40px;">
            <p style="font-weight: 600; color: #111; margin: 0;">Best regards,</p>
            <p style="margin: 5px 0 0 0;">The ByteForger Team</p>
            <a href="https://byteforger.com" style="color: #888; font-size: 14px; text-decoration: none; display: inline-block; margin-top: 5px;">byteforger.com</a>
          </div>
        </div>
      </div>
    `;

    const clientEmailText = `
Hi ${firstName},

Thank you for reaching out to ByteForger! We have successfully received your inquiry regarding "${name}".

Our team is currently reviewing your message and we are excited to learn more about how we can assist you. We strive to respond to all inquiries as quickly as possible, typically within 24 hours.

In the meantime, feel free to browse our portfolio or follow us on our social media channels to see our latest work. If you have any urgent details to add, you can reply directly to this email.

Best regards,
The ByteForger Team
https://byteforger.com
    `;

    await resend.emails.send({
      from: "ByteForger Team <info@byteforger.com>",
      to: email, // Send to the client
      subject: "We've received your message - ByteForger",
      html: clientEmailHtml,
      text: clientEmailText,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw error;
  }
}
