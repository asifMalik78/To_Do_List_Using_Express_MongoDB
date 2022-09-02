const express = require("express");
const router = express.Router();


router.get("/", require("../controllers/home").home);
router.use("/list", require("./add"));
router.use("/list" ,require('./delete'));

console.log("router loaded");
module.exports = router;
