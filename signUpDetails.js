const mongoose=require('mongoose')

const userDetailSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        Unique:true,
        trim:true
    },
   password:{
    type:String,
    required:true
   },
   confirmPassword:{
    type:String,
    required:true
   }
})

const userDetails=new mongoose.model("userDetails",userDetailSchema)
module.exports=userDetails;