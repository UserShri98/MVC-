const User=require('../models/user')

async function handleGetAllUsers(req,res){
    const allDbUsers=await User.find({})
    res.json(allDbUsers)
}

async function handleGetUserById(req,res){
    const user= await User.findById(req.params.id)
    if(!user) res.status(404).json({error:"User not found"})
    return res.json(user);  
}

async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName:"changed"})
        res.json({message:"success"})
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    res.json({message:`success`})
}

async function handleCreateNewUser(req,res){
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender)
        return res.status(400).json({message:"All fields required"})
    
  const result = await User.create({
    firstName:body.first_name ,
    lastName:body.last_name,
    email:body.email ,
    gender:body.gender,
  })

  return res.status(201).json({message:"success", id:result._id})

}

module.exports={
    handleGetAllUsers,handleGetUserById,handleUpdateUserById,handleDeleteUserById,handleCreateNewUser
}