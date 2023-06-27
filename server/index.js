import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// database connection
//http://www.mongodb.com/cloud/atlas
const CONNECTION_URL =
  "mongodb+srv://Memories_mern:Memories_mern@atlascluster.v44c8bn.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log(`Server running on port:${PORT} `))
  .catch((error) => () => console.log(error.message));
