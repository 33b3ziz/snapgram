import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Too Short!" }),
  username: z.string().min(3, { message: "Too Short!" }).max(20, "Too Long!"),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 charachers!" }),
});
