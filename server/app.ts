import { app } from "./bin/server";
import { middlewares } from "./middlewares";
import { authenticator } from "./middlewares/authenticate.middleware";
import { fileRouter } from "./routers/files.router";
import { userRouter } from "./routers/users.router";
app.use(...middlewares);
app.use(userRouter);
app.use(authenticator, fileRouter);
