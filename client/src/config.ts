export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "6281283812336";

export const WHATSAPP_MESSAGE = "Hello%20Allverze%20team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20learn%20more%20about%20how%20your%20solutions%20can%20support%20my%20business.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export const PUBLIC_EMAIL = import.meta.env.VITE_PUBLIC_EMAIL || "hello@allverze.com";
