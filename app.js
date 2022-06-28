// put in the environment variables to this file
require("dotenv").config();
// put in the express library
const express = require("express");
// put in mongoose library
const mongoose = require("mongoose");
// put in cors library for http request
const cors = require("cors");

const app = express();
app.use(cors());
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
// if there's an error with connecting to db this log out that there's an error
db.on("error", (error) => console.error(error));

// this will log out something when im connected to db
db.once("open", () => console.error("connected to db"));

// set up the server to accept json
app.use(express.json());

// creating routers to my app
const hoursRouter = require("./routes/hours.js");
// now i command my server to use this route from the routes folder
app.use("/hours", hoursRouter);

app.listen(5000, () => console.log("Server is conncted"));
