const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const PHONE_PATTERN = /^[+]?[\d\s\-()]{7,20}$/;

export function validateContactInput(input) {
  const { name, email, phone, message } = input;

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof phone !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !EMAIL_PATTERN.test(email) ||
    !PHONE_PATTERN.test(phone) ||
    !message.trim()
  ) {
    return {
      ok: false,
      message: 'Please provide a valid name, email address, phone number, and message.',
    };
  }

  return {
    ok: true,
    data: { name: name.trim(), email: email.trim(), phone: phone.trim(), message: message.trim() },
  };
}