import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required.")
    .max(50, "Name should not exceed 50 characters.")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes.",
    ),

  email: z
    .string()
    .email("Please enter a valid email address.")
    .max(100, "Email should not exceed 100 characters."),

  subject: z
    .string()
    .trim()
    .min(1, "Subject is required.")
    .max(100, "Subject should not exceed 100 characters.")
    .regex(/^[\w\s.,!?'-]+$/, "Subject contains invalid characters."),

  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(1000, "Message should not exceed 1000 characters.")
    .regex(
      /^[^<>]+$/,
      "Message contains invalid characters, please avoid using < or >.",
    ),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
