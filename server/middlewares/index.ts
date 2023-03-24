import { authenticator } from "./authenticate.middleware";
import { jsonParser, urlParser } from "./body-parser";
import { logger } from "./logger";
import { corsMiddleWare } from "./cors-middleware";

export const middlewares = [logger, urlParser, jsonParser, corsMiddleWare];
