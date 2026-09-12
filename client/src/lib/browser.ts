export function getBrowserTimezone(): string {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return typeof tz === "string" ? tz : "";
}