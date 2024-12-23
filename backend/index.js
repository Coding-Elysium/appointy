import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/user.js";

configDotenv();
const PORT = process.env.PORT || 5001;
const app = express();

app.use("/appointment", router);
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Web server is running at PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error", error);
  })
  .finally(() => {
    console.log("Connected to Database");
  });
