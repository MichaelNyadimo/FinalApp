function checkNotAuthenticated(res, req, next){
    if(req.isAuthenticated()){
        return res.redirect('.');
    }
    next();
}
function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login.js');
}

module.exports ={
    checkNotAuthenticated
}