const List=require('../models/list');

module.exports.deleteList=(req , res)=>{
    const id=req.query.id;
    List.findByIdAndDelete(id , (err)=>{
        if(err){
            console.log("error in deleting" , err);
            return;
        }

        return res.redirect('/');
    })
}