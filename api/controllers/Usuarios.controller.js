const UsuarioRepositories = require("../persistance/repositories/Usuario.repositories");


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
    const idAmigo = request.body["idAmigo"];
    try{
        const result = await UsuarioRepositories.addFriend(idUsuario,idAmigo);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json(err);
    }
}

module.exports.numAmigos = async function(req, res){
    try{
        const id = req.params.id
        const result = await UsuarioRepositories.numAmis(id)
        res.status(200).json(result);
    }catch(err){
        res.status(500).json("Error obteniendo el numero de amigos");
    }
}

