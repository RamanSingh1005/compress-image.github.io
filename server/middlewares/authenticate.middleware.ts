import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const authenticator: RequestHandler = (req, res, next) => {
  const { headers } = req;
  const { SALT } = process.env;
  const payload = headers["token"] as string;
  console.log({ payload });
  try {
    const result = jwt.verify(payload, SALT!, { complete: true });
    if (result) return next();
  } catch (err) {
    console.log(err);
    res.send("invalid login");
  }
};
