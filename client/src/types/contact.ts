export type ContactIntent =
  | "Custom Software Engineering"
  | "Mobile Application Development"
  | "Application Performance Monitoring"
  | "Performance & Automation Testing"
  | "Discovery & Advisory"
  | "Other";

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactPayload extends ContactFormState {
  botcheck?: string;
}

export interface ContactResponse {
  success: boolean;
  confirmation?: "sent" | "failed" | "skipped";
  leadRef?: string;
  message?: string;
}