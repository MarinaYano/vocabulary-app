import express from "express";
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes";
import connectToMongoDB from "./db/connectToMongoDB";

const app: express.Express = express();
const PORT = 8000;

dotenv.config()

app.use(express.json());

app.use("/api/auth", authRoutes)

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello, Node");
});


app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`listening to port ${PORT}`);
});