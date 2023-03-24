// import multer from "multer";
import { RequestHandler } from "express";
// import path from "path";
// import fs from "fs/promises";
import { fileSchema } from "../schema/file.schema";
import sharp from "sharp";

export class FileController {
  public static saveFile: RequestHandler = async (req, res) => {
    const { body, file } = req;
    const path = `${process.cwd()}/server/uploads/`;
    if (file) {
      const { buffer } = file;
      await sharp(buffer)
        .webp({ quality: 20 })
        .toFile(`${path}${Date.now()}${file.originalname}`);

      console.log("file saved");
    }
    console.log("file, body from saveFile", file, body);

    // const data = await fileSchema.parseAsync(body);

    // if (data) {
    //   console.log(data);
    // }

    res.json({ name: "jio" });
  };

  public static getFile: RequestHandler = async (req, res) => {
    //logic to get files
  };
}
