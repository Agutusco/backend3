import express from "express";
import envsConfig from "./config/envs.config.js";
import { connectDB } from "./config/mongoDB.js";
import router from "./common/router.js";
import { logger } from "./common/utils/logger.js";
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);


app.listen(envsConfig.PORT, () => {
    logger.info(`Puerto: ${envsConfig.PORT}`);
});