const express=require('express');
const bodyParser = require("body-parser");
const router=express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/add' , urlencodedParser , require('../controllers/taskListAdd').addList)

module.exports=router;