const usuarioSchema = require("../schemas/usuario.schema");

module.exports.save = async function(usuario){ 
    const newUsuario = new usuarioSchema(usuario);
    const result = await newUsuario.save(usuario);
    return result;
 }

 module.exports.addFriend = async function(idUsuario,idAmigo){
    //NO SE PUEDE AGREGAR DOS VECES EL ID, HAY QUE TRABAJARLO
         const usuario = await usuarioSchema.findById(idUsuario);
         usuario.usuariosAmigos.push(idAmigo);
         const result = await usuario.save();
         return result;    
}


 module.exports.get = async function(){
    const respuesta = await usuarioSchema.find();
    return respuesta;
 }

 module.exports.getByID = async function(id){
    const respuesta = await usuarioSchema.findById(id);
    return respuesta;
 }


 module.exports.update = async function(id,usuario){
   const respuesta = await usuarioSchema.findByIdAndUpdate(id, {$set:usuario}, {new:true});
   return respuesta;
}

 module.exports.delete = async function(id){
    const respuesta = await usuarioSchema.findByIdAndDelete(id);
    return respuesta;
 }



