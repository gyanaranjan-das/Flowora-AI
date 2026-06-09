import mongoose from "mongoose";
import dns from "node:dns";

const connectDB = async () => {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`
===================================
🍃 MongoDB Connected
📦 Database: ${conn.connection.name}
🖥️ Host: ${conn.connection.host}
===================================
    `);
  } catch (error) {
    console.error("connection failed");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
