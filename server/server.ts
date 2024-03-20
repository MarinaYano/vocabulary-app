import express from "express";

const app: express.Express = express();
const port = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello, Node");
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});