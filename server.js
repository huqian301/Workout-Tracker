const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


require('dotenv').config();
const { connectDB } = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


connectDB();


// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});