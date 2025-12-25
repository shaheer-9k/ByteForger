import { google } from "googleapis";
import type { ContactFormData } from "@shared/schema";
import * as fs from "fs";
import * as path from "path";

function getCredentials() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Google Sheets spreadsheet ID not configured. Please set GOOGLE_SHEETS_SPREADSHEET_ID in your .env file");
  }

  // Try to load credentials from JSON file first
  const keyFilePath = path.join(process.cwd(), '..', 'byteforger-772daa3532b3.json');
  let keyFile;

  try {
    keyFile = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));
  } catch (error) {
    // Fallback to environment variables
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!clientEmail || !privateKey) {
      throw new Error("Google Sheets credentials not found. Either place the service account JSON file in the project root or set GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY in your .env file");
    }

    keyFile = {
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, '\n'),
    };
  }

  return {
    credentials: keyFile,
    spreadsheetId,
  };
}

export async function getGoogleSheetsClient() {
  const { credentials } = getCredentials();

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: "v4", auth });
}

export async function saveContactFormToSheets(data: ContactFormData) {
  try {
    const { spreadsheetId } = getCredentials();
    const sheets = await getGoogleSheetsClient();

    const now = new Date();
    const submissionDate = now.toLocaleDateString();
    const submissionTime = now.toLocaleTimeString();
    const values = [[submissionDate, submissionTime, data.name, data.email, data.subject, data.message]];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    throw error;
  }
}
