import { connect } from "mongoose";

export const connectToDB = async () => {
  const { DB_STRING = "" } = process.env;
  try {
    const connection = await connect(DB_STRING, {});
    if (connection) return connection;
    return false;
  } catch (err) {
    console.log(`error connecting to database`, err);
  }
};
