const publicacionesSchema = require("../schemas/publicaciones.schema");

module.exports.save = async function(publicacion){ 
    const newPublicacion = new publicacionesSchema(publicacion);
    const result = await newPublicacion.save(publicacion);
    return result;
 }

 module.exports.addTag= async function(idPublicacion,tag){ 
const publicacionEncontrada = await  publicacionesSchema.findById(idPublicacion);
 publicacionEncontrada.tags.push(tag);
 const result = await publicacionEncontrada.save();
return result; 
              
}

 module.exports.get = async function(){
    const respuesta = await publicacionesSchema.find();
    return respuesta;
 }

 module.exports.getByID = async function(id){
    const respuesta = await publicacionesSchema.findById(id);
    return respuesta;
 }

 //TRAER MIS PUBLICACIONES
 module.exports.getMyPosts = async function(id){
  const respuesta = await publicacionesSchema.find({autorPublicacion: id});
  return respuesta;
}
module.exports.numPost = async function(id){
  const respues = await publicacionesSchema.count({autorPublicacion: id});
  return respues;


 
}

 module.exports.update = async function(id,publicacion){
     const respuesta = await publicacionesSchema.findByIdAndUpdate(id, {$set:publicacion},{new:true});
     return respuesta;
 }


 module.exports.delete = async function(id){
    const respuesta = await publicacionesSchema.findByIdAndDelete(id);
    return respuesta;
 }
 


 //BUSCAR PUBLICACIONES POR TAG
 module.exports.getTags = async function(tags){
   const respuesta = await publicacionesSchema.find({ tags: { $in: [tags] }, public:true});
   return respuesta;
 }

 

 //BORRAR UNA PUBLICACION MIA
 module.exports.deleteMyPost = async function(id){
   const publicacion = await publicacionesSchema.findById(id);
   publicacion.comentarios.delete({autorPublicacion: id, public:true});
   const result = await usuario.findByIdAndUpdate(publicacion);
   return result;    
 }
//TRAER LOS COMENTARIOS DE MI PUBLICACION
 module.exports.getUserComments = async function(id){
   const respuesta = await publicacionesSchema.find({autor: id, public:true});
   return respuesta;
 }  
//BORRAR COMENTARIOS DE MI PYBLICACION
 module.exports.deleteUserComent = async function(id){
   const publicacion = await publicacionesSchema.findById(id);
   publicacion.comentarios.delete({autor: id, public:true});
   const result = await usuario.findByIdAndUpdate(publicacion);
   return result;    
 }