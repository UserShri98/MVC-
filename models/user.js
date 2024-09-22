const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    firstName:{
      type:String,
      required:true
    },
    LastName:{
      type:String,
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    gender:{
      type:String,
      required:true
    },
  },{timestamps:true}
  )
  
  const User=mongoose.model("user", userSchema);

module.exports=User;