const express=require('express');
const router=express.Router();

router.get('/delete' , require('../controllers/taskListDelete').deleteList);

module.exports=router;