import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import connectDb from "./mongodb/connect.js";
import postRoute from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoute);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from Photo Wala");
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(8000, () => {
      console.log("Server is running on port http://localhost:8000");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
