
const users=require ('../models/usermodel');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

 //register new user
exports.Register=async(req , res)=>{
   
    const { name, email, password, phone}= req.body
    try {
        const found = await users.findOne({email}) 
        if(found){
          res.status(400).send({errors:[{msg:"email exist"}]})
        }else{
            const user = new users(req.body)
            const salt = 10
            const hashPassword = bcrypt.hashSync(password,salt)
            user.password=hashPassword
            const payload={id:user._id} 
            const token = jwt.sign(payload,"123456")
            await user.save()
            res.status(200).send({msg : "ok",user,token})
        }
      
    } catch (error) {
        res.status(500).send(error)

    }
}
//login user
exports.Login=async(req,res)=>{
    const {email,password}= req.body
    try {
        const user = await users.findOne({email})
        if(!user ){
            res.status(400).send({errors:[{msg:"user not exist"}]})
        }else{
            const match = bcrypt.compareSync(password,user.password)
            if(!match){
                res.status(400).send({errors:[{msg:"wrong password"}]})

            }else{
                const payload={id:user._id} 
                const token = jwt.sign(payload,"123456")
            res.status(200).send({msg : "ok",user,token})
            }
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getuser= async (req,res)=>{
    try {
        const getUSER= await user.find()
        res.status(200).send({message:'done', getUSER})
    } catch (error) {
        res.status(500).send(error)
        
    }
}

exports.deleteuser=async(req,res)=>{
    try {
        const deleteUSER = await users.findByIdAndDelete(req.params.id)
        res.status(200).send({message:'done deleted',deleteUSER})
        
    } catch (error) {

           res.status(500).send(error)
    }
}
