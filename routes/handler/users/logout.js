const {
    User,
    RefreshToken
} = require('../../../models')

module.exports =  async(req,res) => {
    const userId = req.body.user_id
    const user = await User.findByPk(userId)

    if(!user){
        res.status(404).json({
            status:'error',
            message: 'user not found'
        })
    }
    await RefreshToken.destroy({
        where: {
            user_id: userId
        }
    })

    res.json({
        status: 'success',
        message: 'Refresh Token Deleted'
    })
}