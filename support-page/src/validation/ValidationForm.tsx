import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
  checkbox: z
    .boolean()
    .refine((val) => val, { message: "Checkbox is required" }),
});
