const { body, validationResult } = require("express-validator");
module.exports.StudentdataValid = async (req, res, next) => {
  const NameUpdate = req.body.fullname;
  const MobileUpdate = req.body.mobile;
  if (
    NameUpdate.length > 5 &&
    MobileUpdate.length > 9 &&
    MobileUpdate.length < 11
  ) {
    console.log("Data added");
    next();
  } else {
    console.log("Please valid length");

    res.status(201);
  }
};
