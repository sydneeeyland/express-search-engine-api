const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const Routes = require("./Route/defaultRoute");
const connect = require("./Config/database");

const port = 5000;
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://127.0.0.1:5173"],
    credentials: true,
  })
);

app.use("/auth", Routes);
app.use("/search", Routes);

app.listen(port, () =>
  console.log(
    `Server is running on port: ${port}, base Endpoint: http://localhost:${port}/`
  )
);
