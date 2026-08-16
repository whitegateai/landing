import assert from "node:assert/strict";
import { parseContactSubmission } from "./contactSubmission.ts";

const valid = parseContactSubmission({
  firstName: " Ada ",
  lastName: " Yılmaz ",
  email: " ADA@EXAMPLE.COM ",
  message: "Akışımızı birlikte netleştirelim.",
  website: "",
});

assert.deepEqual(valid, {
  firstName: "Ada",
  lastName: "Yılmaz",
  email: "ada@example.com",
  message: "Akışımızı birlikte netleştirelim.",
  website: "",
});
assert.equal(parseContactSubmission({ ...valid, email: "hatalı" }), null);
assert.equal(parseContactSubmission({ ...valid, message: "kısa" }), null);
