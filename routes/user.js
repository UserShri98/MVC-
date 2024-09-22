const express=require("express");
const fs=require('fs')
const { all } = require("express/lib/application");

const router=express.Router();

const {handleGetAllUsers,handleGetUserById,handleUpdateUserById,handleDeleteUserById,handleCreateNewUser}=require('../controllers/user')

router.route('/').get(handleGetAllUsers).post(handleCreateNewUser)

router.use((req,res,next)=>{
    fs.appendFile("log.text", `\n${Date.now()}: ${req.ip}: ${req.method} : ${req.path}`,(err,data)=>{
        next();
    })
})

router.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)
 


module.exports=router;

