import { model, Schema } from "mongoose";
import { IUser } from "../schema/user.schema";

export const userSchema = new Schema<IUser>({
  userName: String,
  password: String,
  email: {
    unique: true,
    type: String,
  },
});

export const UserModel = model("User", userSchema);
