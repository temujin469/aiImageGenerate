import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import postRoutes from "./routes/posts.js";
import dalleRoutes from "./routes/dalles.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Hello from DALL.E!",
    });
});
const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URI);
        app.listen(8080, () => console.log("Server started on port 8080"));
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
//# sourceMappingURL=index.js.map