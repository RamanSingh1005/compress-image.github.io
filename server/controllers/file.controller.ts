// import multer from "multer";
import { RequestHandler } from "express";
// import path from "path";
// import fs from "fs/promises";
import { fileSchema } from "../schema/file.schema";
import sharp from "sharp";
import { FileModel } from "../model/file.model";

export class FileController {
  public static saveFile: RequestHandler = async (req, res) => {
    const { body, file } = req;
    const path = `${process.cwd()}/server/uploads/`;
    if (file) {
      const data = await fileSchema.parseAsync(body);
      console.log("data", data);

      const fileName = `${Date.now()}${file.originalname}`;
      if (data) {
        data.fileName = fileName;
        const file = new FileModel(data);
        const savedFile = await file.save();
        console.log("saved", savedFile);
      }

      const { buffer } = file;
      await sharp(buffer).webp({ quality: 20 }).toFile(`${path}${fileName}`);

      console.log("file saved");
    }
    console.log("file, body from saveFile", file, body);

    // const data = await fileSchema.parseAsync(body);

    // if (data) {
    //   console.log(data);
    // }

    // res.json({ savedName: fileName });
  };

  public static getFiles: RequestHandler = async (req, res) => {
    const path = `${process.cwd()}/server/uploads/`;
    res.sendFile(`${path}compressed1679689059118Screenshot1.png`);
    //logic to get files
  };
}
