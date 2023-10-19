const bcrypt = require("bcrypt");
const { User } = require("../../../models")
const validator = require("fastest-validator");
const v = new validator();


module.exports = async (req, res) => {
    const schema = {
        email:"email|empty:false",
        password:"string|min:6"
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res.status(400).json({
            status:"error",
            message:validate
        })
    }

    const user = await User.findOne({
        where:{
            email:req.body.email
        }
    });

    if(!user){
        res.status(404).json({
            status:"error",
            message:"Account Not Found!"
        })
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user.password);

    if(isValidPassword){
        res.json({
            status:"success",
            data:{
                id:user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                profession: user.profession
            }
        })
    }else{
        res.status(404).json({
            status:"error",
            message:"Password Is Not Valid!"
        });

    }

}