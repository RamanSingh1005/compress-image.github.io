import "dotenv/config";
import { startServer } from "./bin/server";
import "./app";
startServer();

process.on("SIGINT", () => {
  process.exit();
});
