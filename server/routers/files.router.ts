import { Router } from "express";
import multer from "multer";
import path from "path";
import { FileController } from "../controllers/file.controller";
import { UserController } from "../controllers/user.controller";

const upload = multer();

export const fileRouter = Router()
  .post("/file", upload.single("image"), FileController.saveFile)
  .get("/files/:fileName", UserController.login);
