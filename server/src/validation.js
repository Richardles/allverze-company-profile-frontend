const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const PHONE_PATTERN = /^[+]?[\d\s\-()]{7,20}$/;
const TIMEZONE_PATTERN = /^[A-Za-z_+\-/]{1,64}$/;

function isValidTimezone(value) {
  try {
    new Intl.DateTimeFormat('en-GB', { timeZone: value }).format();
    return true;
  } catch {
    return false;
  }
}

export function validateContactInput(input) {
  const { name, email, phone, message, timezone } = input;

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

  const validTimezone =
    typeof timezone === 'string' && TIMEZONE_PATTERN.test(timezone) && isValidTimezone(timezone)
      ? timezone
      : undefined;

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      timezone: validTimezone,
    },
  };
}
