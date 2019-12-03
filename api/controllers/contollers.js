const models =require("../models");

exports.signIn = async function (req, res) {
const user = await models.Users.findOne({
    where: {
        email: req.body.email,
    }
});

return res.status(200).send({ success:true, user });
};

exports.signUp = async function(req,res){
    const userObj = {
        firstName: 'Narek',
        lastName: 'Shmavonyan',
        email: 'Shmavonyann@bk.ru',
        password:'123456'

    };
    await models.Users.create(userObj);
    return res.status(200).send({success: true, msg:'signup asxatec'});
};
