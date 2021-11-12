const Student = require("../models/Student");
const Stud = require("../models/Student");

module.exports.StudentData = async (req, res) => {
  const Sdata = new Stud({
    fullname: req.body.fullname,
    mobile: req.body.mobile,
  });

  const st1 = await Sdata.save();
  res.json(st1);
};

module.exports.StudentPostdata = async (req, res) => {
  const Sdata = new Stud({
    fullname: req.body.fullname,
    mobile: req.body.mobile,
  });

  const st1 = await Sdata.save();
  res.json(st1);
};

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
