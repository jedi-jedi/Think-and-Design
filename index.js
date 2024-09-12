const express = require("express");
const moongoose = require("mongoose");
const Cryptojs = require("crypto-js");
const cors = require("cors");
const nodemon = require("nodemon");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();


dotenv.config();
app.use(express());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(6000, () => {
    console.log("server is running")
});