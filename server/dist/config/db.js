import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const connectDB = (url) => {
    console.log("urls==>", url);
    mongoose.set("strictQuery", true);
    mongoose
        .connect(url)
        .then(() => console.log("connected to mongo"))
        .catch((err) => {
        console.error("failed to connect with mongo");
        console.error(err);
    });
};
export default connectDB;
//# sourceMappingURL=db.js.map