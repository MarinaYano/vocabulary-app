import express from "express";
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes";
import connectToMongoDB from "./db/connectToMongoDB";

dotenv.config()
const app: express.Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello, Node");
});

app.use("/api/auth", authRoutes)

app.listen(port, () => {
  connectToMongoDB()
  console.log(`listening to port ${port}`);
});