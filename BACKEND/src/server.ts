import { initializeDatabase } from './config/init';
import express from 'express';
import cors from "cors";
import authRouter from "./routes/auth";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Register your auth routes under /api
app.use("/api", authRouter);

// Initialize database before starting server
initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});