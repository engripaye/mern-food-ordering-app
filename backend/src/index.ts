import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import * as mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() =>  console.log("MongoDB Connected"))

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
