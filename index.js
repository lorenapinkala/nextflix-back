const express = require("express");
const app = express();
const volleyball = require("volleyball");
const mongoose = require("mongoose");
routes = require("./routes");
const User = require("./models/User");
const client = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

app.use(cors({
  origin: '*'
}));
 app.use(express.json());
 app.use(volleyball);
 app.use(cookieParser());
 app.use(express.urlencoded({ extended: true }));
 app.use("/api", routes);


app.listen(3000, () => {
  console.log("Api working..");

});