const mongoose = require("mongoose");
const express = require("express");
const app = express();
const DB =
  "mongodb+srv://Raghvendrars:Raghav%4026897@cluster0.pqafw.mongodb.net/Student_mgmt";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log("no connection"));

app.use(express.json());
const StudentRouter = require("./routes/Student");

app.use("/Student", StudentRouter);

app.listen(9000, function () {
  console.log("Server Started");
});
