require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const { getUsers } = require("./db/queries");
const authRouter = require("./routes/authRouter");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", getUsers);

app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`server is running`));
