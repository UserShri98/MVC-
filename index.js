const express=require("express");
const app=express();
const {connectMongoDb}=require('./connection')
const {logReqRes}=require('./middlewares')
const userRouter=require('./routes/user.js')

app.use(express.urlencoded({extended:false}))

connectMongoDb('mongodb://localhost:27017/myuser')
.then(()=>console.log("Mongodb is connected"))

app.use(logReqRes("log.text"))

app.use("/api/users", userRouter)

app.listen(3000,()=>{
    console.log("Server is listening")
})