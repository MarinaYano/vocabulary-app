import express from "express";

import authRoutes from "./routes/auth.routes";

const app: express.Express = express();
const port = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello, Node");
});

app.use("/api/auth", authRoutes)

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});