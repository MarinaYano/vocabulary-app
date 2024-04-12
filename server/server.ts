import express from "express";
import dotenv from "dotenv"
import cors from 'cors';
import authRoutes from "./routes/auth.routes";
import wordBookRoutes from "./routes/wordBook.routes";
import connectToMongoDB from "./db/connectToMongoDB";

const app: express.Express = express();
const PORT = 8000;

dotenv.config()

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200 
}))

app.use("/api/auth", authRoutes)
app.use("/api/words", wordBookRoutes)

app.get("/", (req: express.Request, res: express.Response) => {
  console.log('Hello Node')
});


app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`listening to port ${PORT}`);
});