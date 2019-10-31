const usurioSchema = require("../schemas/usuario.schema");

module.exports.save = async function(usuario){ 
    const newUsuario = new usurioSchema(usuario);
    const result = await newUsuario.save(usuario);
    return result;
 }

 module.exports.get = async function(){
    const respuesta = await usurioSchema.find();
    return respuesta;
 }

 module.exports.getByID = async function(id,usuario){
    const respuesta = await usurioSchema.findById(id, {$set:usuario}, {new:true});
    return respuesta;
 }


 module.exports.update = async function(id,usuario){
   const respuesta = await usurioSchema.findByIdAndUpdate(id, {$set:usuario},{new:true});
   return respuesta;
}

 module.exports.delete = async function(id, usuario){
    const respuesta = await usurioSchema.findByIdAndDelete(id,{$set:usuario}, {new:true});
    return respuesta;
 }