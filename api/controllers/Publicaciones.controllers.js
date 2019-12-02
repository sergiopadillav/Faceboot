const PublicacionesRepositories = require("../persistance/repositories/Publicaciones.repositories");

module.exports.post = async function(req, response){
    const publicacion = req.body;
    try{
        const result = await PublicacionesRepositories.save(publicacion);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("No se pudo guardar la publicación "+err);
    }
}
module.exports.putTag = async function(request, response){
    const idPublicacion = request.params.id;
    const tag = request.body;
    try{
        const result = await PublicacionesRepositories.addTag(idPublicacion,tag);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json(err);
    }
}

module.exports.numPublicaciones = async function(req, res){
    try{
        const id = req.params.id
        const result = await PublicacionesRepositories.numPost(id)
        res.status(200).json(result);
    }catch(err){
        res.status(500).json("Error obteniendo el numero de post");
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
//AUN NO QUEDAS BEBE, PERO QUEDARAS
module.exports.getTags = async function (request,response){
    try{
        const result = await PublicacionesRepositories.getTags(request.params.tags);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error al obtener los publicaciones con esos tags");
    }
}


module.exports.getMyPosts = async function(request,response){
    try{
        const result = await PublicacionesRepositories.getMyPosts(request.params.id);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error al obtener los publicaciones de el usuario");
    }
}


module.exports.getUserComments = async function(request,response){
    try{
        const result = await PublicacionesRepositories.getUserComments(request.params.id);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error al obtener los publicaciones de el usuario");
    }
}

module.exports.deleteUserComents = async function(request,response){
    try{
        const result = await PublicacionesRepositories.deleteUserComent(request.params.id);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error al borrar los comentarios del usuario");
    }
}

module.exports.deleteMyPost = async function(request,response){
    try{
        const result = await PublicacionesRepositories.deleteMyPost(request.params.id);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error al eliminar tu publicacion");
    }
}
module.exports.getByID = async function(request, response){
    try{
        const result = await PublicacionesRepositories.getByID(request.params.id);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error al obtener la publicación");
    }
}



module.exports.put = async function(request, response){
    try{
        let publicacion= request.body;
        const result = await PublicacionesRepositories.update(request.params.id, publicacion);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("No se pudo actualizar la publicación");
    }
}


module.exports.delete = async function(request, response){
    try{
        const result = await PublicacionesRepositories.delete(request.params.id);
        response.status(200).json(result);
    }catch(err){
        response.status(500).json("Error borrando publicacion");
    }
}






