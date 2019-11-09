const publicacionesSchema = require("../schemas/publicaciones.schema");

module.exports.save = async function(publicacion){ 
    const newPublicacion = new publicacionesSchema(publicacion);
    const result = await newPublicacion.save(publicacion);
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
//AUN NO QUEDAS BEBE, PERO QUEDARAS
 module.exports.getTags = async function(id){
   const publicacion = await publicacionesSchema.findBtyId(id);
   for (var i = 0; i < publicacion.tags.lenght; i++) {
      n += i;
      const respuesta = publicacion.tags.find(n);
   return respuesta;
   } 
   
 }

 module.exports.update = async function(id,publicacion){
     const respuesta = await publicacionesSchema.findByIdAndUpdate(id, {$set:publicacion},{new:true});
     return respuesta;
 }


 module.exports.delete = async function(id){
    const respuesta = await publicacionesSchema.findByIdAndDelete(id);
    return respuesta;
 }

 