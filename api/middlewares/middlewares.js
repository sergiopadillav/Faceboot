const tokens = require("./tokens");

exports.tokenMiddleware = function(req, res, next){
    const token = req.headers.authorization;
    if(typeof token!=='undefined'){
            tokens.validateToken(token).then(result=>{
                next();
            }).catch(err=>{
                res.status(401).json({
                    message:"Token invalid"
                });
            });
    }else{
        res.status(401).json({
            message:"Token not found"
        });
    }
}