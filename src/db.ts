import mongoose from "mongoose";
import dotenv from "dotenv";
import { mongoConfig } from './config/config'

dotenv.config();
const { username, password, host, port, database, authSource} = mongoConfig

const mongoURI = `mongodb://${username}:${password}@${host}:${port}/?authSource=${authSource}`;


export async function connectMongoDB() {
  mongoose
    .connect(mongoURI) 
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err: any) => {
      console.error("Error connecting to MongoDB:", err);
      process.exit(1);
    });
}
