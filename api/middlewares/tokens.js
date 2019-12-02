const jwt = require("jsonwebtoken");
const secretPhrase = "f4c3b0oTw3Bt0k3n";

exports.generateToken = function(user,nombreUsuario){
    
    return jwt.sign({id:user,usuario:nombreUsuario}, secretPhrase,{expiresIn: "2h" });
}

//MANEJO CON ASYNC/AWAIT
exports.validateToken = async function(token) {
    const respuesta = await jwt.verify(token,secretPhrase);
    return respuesta; 
    }