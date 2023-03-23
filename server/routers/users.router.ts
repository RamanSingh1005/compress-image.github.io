import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export const userRouter = Router()
  .post("/users", UserController.createUser)
  .post("/login", UserController.login);
