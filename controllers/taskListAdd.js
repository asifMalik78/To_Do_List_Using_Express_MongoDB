const List=require('../models/list');

module.exports.addList=(req , res)=>{
    const obj=JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    List.create(
        {
            taskName:obj.name
        } ,
        (err , newList)=>{
            if(err){
                console.log(`Error in Adding : ${err}`);
                return;
            }
            
            return res.redirect('/');
        }
    )
}