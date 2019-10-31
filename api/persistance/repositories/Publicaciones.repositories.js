const publicacionesSchema = require("../schemas/publicaciones.schema");

module.exports.save = async function(publicacion){ 
    const newUsuario = new publicacionesSchema(usuario);
    const result = await newUsuario.save();
    return result;
 }

 module.exports.get = async function(){
    const respuesta = await publicacionesSchema.find();
    return respuesta;
 }

 module.exports.getByID = async function(id,publicacion){
    const respuesta = await publicacionesSchema.findById(id, {$set:publicacion}, {new:true});
    return respuesta;
 }

 module.exports.update = async function(id,publicacion){
     const respuesta = await publicacionesSchema.findByIdAndUpdate(id, {$set:publicacion},{new:true});
     return respuesta;
 }


 module.exports.delete = async function(id, publicacion){
    const respuesta = await publicacionesSchema.findByIdAndDelete(id,{$set:publicacion}, {new:true});
    return respuesta;
 }