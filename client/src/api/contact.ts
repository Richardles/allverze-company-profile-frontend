import { API_BASE_URL } from "../config";
import type { ContactPayload, ContactResponse } from "../types/contact";

export class ContactSubmissionError extends Error {}

export async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ContactSubmissionError("Unable to reach the server. Please try again later.");
  }

  const data = (await response.json().catch(() => null)) as ContactResponse | null;
  if (!data || !response.ok || data.success === false) {
    throw new ContactSubmissionError(data?.message ?? "Something went wrong. Please try again.");
  }
  return data;
}