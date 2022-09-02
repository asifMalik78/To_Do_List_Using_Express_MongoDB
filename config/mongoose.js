const mongoose=require('mongoose');
 
const main=async()=>{
    await mongoose.connect('mongodb://localhost:27017/to_do_list_db');
}

main().then(()=> console.log(`successfully connected to the data base`));

main().catch((err)=> console.log(`Unable to connect to the data base : ${err}`));