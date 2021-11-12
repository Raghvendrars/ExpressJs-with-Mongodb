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

const studentSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  mobile: {
    type: Number,
  },
});

mongoose.model("StudentDetails", studentSchema);
const StudentDetails = new mongoose.model("StudentDetails", studentSchema);

const studentData = new StudentDetails({
  fullname: "Raghvendra",
  mobile: "9574547152",
});

// studentData.save();
const StudentData = async () => {
  const Displaydata = await StudentDetails.find();
  console.log(Displaydata);
};

StudentData();

// update document
const updateData = async (id) => {
  const updted = await StudentDetails.updateOne(
    { _id: id },
    {
      $set: {
        fullname: "Singh",
      },
    }
  );
  console.log(updted);
};

// updateData("618dcc88e74c225fd727b69f");

// delete the document

const deleteDoc = async (_id) => {
  const deleteIt = await StudentDetails.deleteOne({ _id });
};
deleteDoc("618dcc88e74c225fd727b69f");
