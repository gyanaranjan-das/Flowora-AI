import mongoose from "mongoose";
import dns, { setServers } from "node:dns";

const connectDB = async () => {
  setServers(["1.1.1.1"], ["8.8.8.8"]);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("connection error");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
