import { z } from "zod";

export const fileSchema = z.object({
  fileName: z.string(),
  description: z.string(),
  filePath: z.string(),
  owner: z.string(),
});
export type IFile = z.infer<typeof fileSchema>;
