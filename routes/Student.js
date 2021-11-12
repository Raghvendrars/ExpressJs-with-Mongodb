const express = require("express");
const router = express.Router();
const Stud = require("../models/Student");

const StudC = require("../controller/Studentcontrol");

router.get("/", StudC.StudentData);

router.post("/", StudC.StudentPostdata);

router.put("/:id", StudC.StudentDataUpdate);

router.delete("/:id", StudC.StudentDataDelete);

module.exports = router;
