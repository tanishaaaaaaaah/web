const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb+srv://tanisha:tanisha@lab-9.xsbfuex.mongodb.net/test"; //connection string from mongodb web

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const alienRouter = require("./routes/routing");
app.use("/routing", alienRouter);

app.listen(9000, () => {
  console.log("Server started");
});
