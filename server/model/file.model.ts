import { model, Schema } from "mongoose";
import { IFile } from "../schema/file.schema";

export const File = new Schema<IFile>({
  fileName: String,
  description: String,
  filePath: String,
  owner: String,
});

export const FileModel = model("files", File);
