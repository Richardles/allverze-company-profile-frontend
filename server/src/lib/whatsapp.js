function toWhatsAppDigits(phone) {
  let digits = String(phone).replace(/\D/g, '');
  if (digits.startsWith('0')) digits = `62${digits.slice(1)}`;
  return digits;
}

export function buildLeadWhatsAppHref({ name, phone, leadRef }) {
  const text = `Hi ${name}, thank you for contacting Allverze. We received your inquiry (${leadRef}) and we're on it. Let's connect!`;
  return `https://wa.me/${toWhatsAppDigits(phone)}?text=${encodeURIComponent(text)}`;
}

export function buildCompanyWhatsAppHref({ name, companyNumber, leadRef }) {
  const text = `Hi Allverze team, this is ${name}. I just submitted an inquiry via your website (Reference: ${leadRef}) and I'd be glad to discuss it privately.`;
  return `https://wa.me/${companyNumber}?text=${encodeURIComponent(text)}`;
}