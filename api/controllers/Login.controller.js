const AuthRepositories = require ("../persistance/repositories/Auth.repositories");

module.exports.logIn = async function(req, response){
    const contrasenia = req.body.contrasenia;
    const usuario = req.body.usuario;
    try{   
    const usuario_Token = await AuthRepositories.logIn(usuario,contrasenia);
    response.status(200).json(usuario_Token);
    }catch(err){
        response.status(500).json("Error logueando al usuario");
    }
}