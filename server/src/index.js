import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "../config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServr = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`
===================================
🚀 Flowora Server Started
🌐 Port: ${PORT}
📅 Environment: ${process.env.NODE_ENV || "development"}
===================================
`);
    });
  } catch (error) {
    console.log("server startup failed:", error);
    process.exit(1);
  }
};

startServr();
