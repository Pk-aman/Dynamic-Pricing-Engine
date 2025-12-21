import { config } from "./config/config";
import express, { Request, Response, Router } from "express";
import { connectDB } from "./config/database";
import router from "./routes";

const PORT = config.port;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.get("/health-check", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    db: "up",
  });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

export default app;
