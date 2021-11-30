const {
    User, RefreshToken
} = require('../../../models')

const validator = require('fastest-validator')
const v = new validator()

module.exports = async(req, res) => {
    const schema = {
        user_id: 'number',
        refresh_token : 'string'
    }

    const validate = v.validate(req.body, schema)

    if(validate.length){
        res.status(400).json({
            status:'error',
            message:validate
        })
    }    

    const userId = req.body.user_id
    const refreshToken = req.body.refresh_token
    const user = await User.findByPk(userId)

    if(!user){
        res.status(404).json({
            status:'error',
            message: 'user not found'
        })
    }
    const data = {
        user_id: userId,
        token: refreshToken
    }
    const createdRefreshToken = await RefreshToken.create(data)

    res.json({
        status:'success',
        data:{
            id: createdRefreshToken.id
        }
    })
}