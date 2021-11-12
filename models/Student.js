const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  fullname: {
    type: String,
  },
  mobile: {
    type: Number,
  },
});

module.exports = mongoose.model("StudentDetails", studentSchema);
