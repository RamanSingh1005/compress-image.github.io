import { RequestHandler } from "express";
import { UserModel } from "../model/user.model";
import { UserSchema } from "../schema/user.schema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class UserController {
  public static createUser: RequestHandler = async (req, res) => {
    const { body } = req;

    const data = await UserSchema.parseAsync(body);
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(data.password, salt);
    data.password = hash;
    if (data) {
      const user = new UserModel(data);
      const doesExist = await UserModel.exists({ email: data.email });
      if (!doesExist) {
        const savedUser = await user.save();
        console.log("saved", savedUser);
      } else {
        console.log("user already exists");
      }
    }
    res.json({ name: "jio" });
  };

  public static login: RequestHandler = async (req, res) => {
    const { body } = req;
    console.log("body", body);
    const { SALT } = process.env;
    const data = await UserSchema.parseAsync(body);
    const user = await UserModel.findOne({
      email: data.email,
    });
    if (user) {
      const result = bcrypt.compareSync(data.password, user!.password);
      console.log({ result });
      const token = jwt.sign(user.id, SALT!);
      return res.json({ token });
    }
    return res.send("false login");
  };
}
