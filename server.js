import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
// import userRouter from "./routes/UserRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is live...");
});

// app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});