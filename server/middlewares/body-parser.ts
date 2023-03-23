import { json, urlencoded } from "body-parser";

export const jsonParser = json({});
export const urlParser = urlencoded({ extended: true });
