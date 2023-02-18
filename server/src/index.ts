import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db";
import postRoutes from "./routes/posts";
import dalleRoutes from "./routes/dalles";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
morgan("tiny");

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from DALL.E!",
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URI as string);
    app.listen(8000, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
