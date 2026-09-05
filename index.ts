import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./src/utils/logger";
import { errorHandler } from "./src/middleware/errorHandler";
import { notFoundHandler } from "./src/middleware/notFound";
import { env } from "./src/config/env";
import Auth from "./src/route/auth.route";
import healthRouter from "./src/route/health.route";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: env.FRONTEND_ORIGIN,
    credentials: true,
  }),
);

app.use(healthRouter);
app.use("/api/v1", Auth);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(env.PORT, () => {
  logger.info({ port: env.PORT }, "server listening");
});
