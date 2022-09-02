const List=require('../models/list');
module.exports.home=(req , res)=>{
    List.find({} , (err , List)=>{
        if(err){
            console.log(`error in fetching : ${err}`);
            return;
        }

        res.render('home' , {
            title:'myToDoList',
            list:List
        })
    })
}