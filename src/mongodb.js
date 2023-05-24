const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginSignuppart")
.then(()=>{
    console.log("mongodb is connected...");
})

.catch(()=>{
    console.log("Failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    }

})


const collection = mongoose.model("collection1",LogInSchema)

module.exports = collection