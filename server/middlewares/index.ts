import { authenticator } from "./authenticate.middleware";
import { jsonParser, urlParser } from "./body-parser";
import { logger } from "./logger";

export const middlewares = [logger, urlParser, jsonParser];
