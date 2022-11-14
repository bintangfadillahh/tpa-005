const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://admin:admin@mycluster.xntmcj2.mongodb.net/test";
// const DB_URL = "mongodb://localhost:27017/todo-app";

const db = mongoose.connect(DB_URL);

module.exports = db;
