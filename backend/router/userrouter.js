
const { isAuth } = require("../middleware/isAuth")
const { Register, Login, getuser, deleteuser } = require("../controller/usercontroller");
const {registervalidation,validation, loginvalidation}= require('../middleware/validation')
const express=require('express');  //creation des routes //
const { sendEmail } = require("../controller/Email");
const userRouter = express.Router()

userRouter.post('/register',registervalidation,validation,Register);
userRouter.post('/login',loginvalidation,validation,Login);
userRouter.get('/get',getuser );
userRouter.delete('/delete/:id',deleteuser);
userRouter.post('/mail',sendEmail);

userRouter.get('/getcurrent',isAuth,(req,res)=>{
    res.send({user:req.user}) ; 
 })
module.exports=userRouter; 