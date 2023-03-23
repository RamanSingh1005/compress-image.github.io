import { z } from "zod";

export const UserSchema = z.object({
  userName: z.string(),
  password: z.string(),
  email: z.string().email(),
});

export type IUser = z.infer<typeof UserSchema>;
