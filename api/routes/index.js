function signin(req, res){
    return res.status(200).send((success:true, msg:'signin ashxatec'))/

}
function signup(req,res){
    return resstatus(200).send((success:true, msg:'signup asxatec'))
}

module.express = function (app) {
    app.route('/signup').post(useCtrl.signup);
    app.route('/signin')
        .post(userCtrl.signin);
}