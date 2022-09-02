const mongoose=require('mongoose');

const listSchema=new mongoose.Schema({
    taskName:{
        type:String,
        require:true
    },
    isSelected:{
        type:Boolean,
        require:true
    }
});


const List=mongoose.model('List' , listSchema);

module.exports=List;
