import { z } from "zod";

const phone = z
  .string()
  .trim()
  .refine((v) => v.replace(/\D/g, "").length >= 10, "Enter a valid phone number.");

export const checkoutSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  phone,
  address: z.string().trim().min(5, "Enter your delivery address."),
  city: z.string().trim().min(2, "Enter your city."),
  pin: z.string().trim().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code."),
});

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  company: z.string().trim(),
  phone,
  email: z.string().trim().refine((v) => v === "" || z.email().safeParse(v).success, "Enter a valid email."),
  product: z.string(),
  quantity: z.string().trim(),
  city: z.string().trim().min(2, "Enter your city."),
  message: z.string().trim(),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
export type QuoteInput = z.infer<typeof quoteSchema>;
