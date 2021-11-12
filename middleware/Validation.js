const { body, validationResult } = require("express-validator");
module.exports.StudentdataValid = async (req, res, next) => {

  const Length = req.body.fullname;
  if (Length.length > 5 && Length.length < 10) {
    console.log("Data added");
    next();
  } else {
    console.log("error");
    res.status(201);
  }
};
