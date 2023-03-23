import express from "express";
import { connectToDB } from "./db";

export const app = express();

export const startServer = async () => {
  const { PORT } = process.env;
  try {
    const connection = await connectToDB();
    if (connection)
      return app.listen(PORT, () => {
        console.log(`server stasrted listening to http://localhost:${PORT}`);
      });
  } catch (err) {
    console.log(err);
  }
};
