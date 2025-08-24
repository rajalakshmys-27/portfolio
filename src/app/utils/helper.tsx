export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
};

export function getExperienceYears() {
  const startDate = new Date("2021-07-29"); // Joining date
  const now = new Date();

  const diffInMs = now - startDate;
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // rough years incl. leap years

  return diffInYears.toFixed(1); // keep 1 decimal, e.g., "3.6"
}
