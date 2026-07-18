import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    email: z
      .string()
      .email("Enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must contain at least 8 characters")
      .regex(/[A-Z]/, "One uppercase letter is required")
      .regex(/[0-9]/, "One number is required")
      .regex(/[^A-Za-z0-9]/, "One special character is required"),

    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });