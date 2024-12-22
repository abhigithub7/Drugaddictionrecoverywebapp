const User = require('../model/userModel')
const bcrypt = require('bcrypt')
 const register = async (req,res) =>{
    try {
        const {fullname,email,password} = req.body;
        const user = await User.findOne({fullname,email,password});
        if(user)
        {
            return res.status(400).json({message:"user alerady exists"});
        }
        const hashpassword =await bcrypt.hash(password,10)
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password:hashpassword,

        })
       await createdUser.save();
        res.status(201).json({message:"user created successfully",user:{ 
            id: createdUser.id, 
            fullname: createdUser.fullname,
            email: createdUser.email,
        
        }});
    } catch (error) {
        console.log("error:" + error.message)
        res.status(500).json({message:"Internal Server error"});

    }

}

const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch =await bcrypt.compare(password,user.password);

        if(!user || !isMatch)
        {
            return res.status(400).json({message:"Invalid username and password ! "});

        }
        else{
            res.status(201).json({message:"Login successfully",user:{
                id: user.id,
                fullname: user.fullname,
                email: user.email,

            }}  
        );
        }
    }
    catch(error){
        console.log("error: "+ error.message);
        res.status(500).json({message:"Internal Server error"});

                
    }
}

module.exports = {
    register,
    login
}