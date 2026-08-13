import express from "express";
import cors from "cors";
import "dotenv/config";
import * as mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/my/user", myUserRoute);

const startServer = async () => {
  const connectionString = process.env.MONGODB_CONNECTION_STRING;

  if (!connectionString) {
    throw new Error("MONGODB_CONNECTION_STRING is not configured");
  }

  await mongoose.connect(connectionString);
  console.log("MongoDB connected");

  app.listen(7000, () => {
    console.log("Server started on http://localhost:7000");
  });
};

void startServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
