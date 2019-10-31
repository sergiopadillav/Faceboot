const PublicacionesRepositories = require("../persistance/repositories/Publicaciones.repositories");

module.exports.post = async function(request, response){
    const publicacion = request.body;
    try{
        const result = await PublicacionesRepositories.save(publicacion);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error creando publicacion");
    }
}

module.exports.get = async function(request, response){
    try{
        const result = await PublicacionesRepositories.get();
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error obteniendo publicacion");
    }
}

module.exports.getByID = async function(request, response){
    try{
        const result = await PublicacionesRepositories.getByID(request.params.id);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error obteniendo publicacion");
    }
}

module.exports.put = async function(request, response){
    try{
        let usuario= req.body;
        const result = await PublicacionesRepositories.update(request.params.id, usuario);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error actualizando publicacion");
    }
}


module.exports.delete = async function(request, response){
    try{
        let publicacion = request.body;
        const result = await PublicacionesRepositories.delete(request.params.id, publicacion);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error borrando publicacion");
    }
}
