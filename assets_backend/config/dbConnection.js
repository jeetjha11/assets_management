const mongoose=require('mongoose');


const dbUrl=process.env.MONGO_URL
const dbName=process.env.DB_NAME


mongoose.connect(`${dbUrl}/${dbName}}`).then((connection)=>{
    console.log("Db Connected");
}).catch(err=>{
    console.log("Error During database connection",err);
})