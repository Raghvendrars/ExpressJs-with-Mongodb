const express = require("express");
const router = express.Router();
const Stud = require("../models/Student");
const Validdata =require("../middleware/Validation");
const StudC = require("../controller/Studentcontrol");

router.get("/", StudC.StudentData);

router.get("/:id", StudC.StudentDataById);

router.post("/",Validdata.StudentdataValid, StudC.StudentPostdata);

router.put("/:id", StudC.StudentDataUpdate);

router.delete("/:id", StudC.StudentDataDelete);

module.exports = router;
