require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const { getUsers } = require("./db/queries");
const authRouter = require("./routes/authRouter");
const skillRouter = require("./routes/skillRouter");
const userRouter = require("./routes/userRouter");
const requestRouter = require("./routes/requestRouter");
const authMiddleware = require("./middlewares/authMiddleware");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/users", authMiddleware, userRouter);

app.use("/skills", authMiddleware, skillRouter);

app.use("/requests", authMiddleware, requestRouter);

app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`server is running`));
