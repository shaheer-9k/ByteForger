import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { saveContactFormToSheets } from "./services/sheets.service";
import { sendContactNotificationEmail, sendConfirmationEmail } from "./services/email.service";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = req.body;

      const validationResult = contactFormSchema.safeParse(data);
      if (!validationResult.success) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationResult.error.flatten(),
        });
      }

      const validatedData: ContactFormData = validationResult.data;

      try {
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || "";
        if (spreadsheetId) {
          await saveContactFormToSheets(spreadsheetId, validatedData);
        }
      } catch (sheetsError) {
        console.error("Error saving to Google Sheets:", sheetsError);
      }

      try {
        await sendContactNotificationEmail(validatedData);
        await sendConfirmationEmail(validatedData.email, validatedData.name);
      } catch (emailError) {
        console.error("Error sending emails:", emailError);
      }

      return res.status(200).json({
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    }
  });

  return httpServer;
}
