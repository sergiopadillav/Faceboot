const UsuarioRepositories = require("../persistance/repositories/Usuario.repositories");
const tokensMiddleware = require("../middlewares/tokens");

module.exports.post = async function(request, response){
    const usuario = request.body;
    try{
        const result = await UsuarioRepositories.save(usuario);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error creando usuario");
    }
}


module.exports.get = async function(request, response){
    try{
        const result = await UsuarioRepositories.get();
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error obteniendo usuario");
    }
}

module.exports.getByID = async function(request, response){
    try{
        const result = await UsuarioRepositories.getByID(request.params.id);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error obteniendo usuario");
    }
}

module.exports.put = async function(request, response){
    try{
        let usuario= request.body;
        const result = await UsuarioRepositories.update(request.params.id, usuario);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error actualizando usuario");
    }
}

module.exports.delete = async function(request, response){
    try{
        const result = await UsuarioRepositories.delete(request.params.id);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error borrando usuario");
    }
}

module.exports.putFriend = async function(request, response){
    const idUsuario = request.params["idUsuario"];
    const idAmigo = request.params["idAmigo"];
    try{
        const result = await UsuarioRepositories.addFriend(idUsuario,idAmigo);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json(err);
    }
}

module.exports.logIn = async function(req, response){
    const {usuario,contrasenia} = req.body;

    try{   
    const token = await tokensMiddleware.generateToken({usuario,contrasenia});
    response.status(200).json(token);
    }catch(err){
        response.status(500).json("Error logueando al usuario");
    }
}