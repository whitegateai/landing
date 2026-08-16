export type ContactSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  website: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseContactSubmission(input: unknown): ContactSubmission | null {
  if (!input || typeof input !== "object") return null;
  const value = input as Record<string, unknown>;
  const text = (key: string) => (typeof value[key] === "string" ? value[key].trim() : "");
  const submission = {
    firstName: text("firstName"),
    lastName: text("lastName"),
    email: text("email").toLowerCase(),
    message: text("message"),
    website: text("website"),
  };

  if (
    submission.firstName.length < 2 ||
    submission.firstName.length > 80 ||
    submission.lastName.length < 2 ||
    submission.lastName.length > 80 ||
    submission.email.length > 254 ||
    !emailPattern.test(submission.email) ||
    submission.message.length < 10 ||
    submission.message.length > 5000
  ) {
    return null;
  }

  return submission;
}
