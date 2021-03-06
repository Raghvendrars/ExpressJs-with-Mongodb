const Student = require("../models/Student");
const Stud = require("../models/Student");
const { body, validationResult } = require("express-validator");

// View Data
module.exports.StudentData = async (req, res) => {
  res.json(await Student.find());
};

// View by id
module.exports.StudentDataById = async (req, res) => {
  res.json(await Student.findById(req.params.id));
};

// Add data
module.exports.StudentPostdata = async (req, res) => {
  try {
    const Sdata = new Stud({
      fullname: req.body.fullname,
      mobile: req.body.mobile,
    });
    const st1 = await Sdata.save();
    res.json(st1);
  } catch (error) {
    console.log("This error" + error.name);
  }
};

// To update the data
module.exports.StudentDataUpdate = async (req, res) => {
  const Sdata = await Student.findById(req.params.id);
  Sdata.fullname = req.body.fullname;
  Sdata.mobile = req.body.mobile;
  const st1 = await Sdata.save();
  res.json(st1);
};

module.exports.StudentDataDelete = async (req, res) => {
  const Sdata = await Student.findByIdAndDelete(req.params.id);
  res.json(Sdata);
};
