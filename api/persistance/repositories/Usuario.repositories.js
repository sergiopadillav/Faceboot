const usuarioSchema = require("../schemas/usuario.schema");

module.exports.save = async function(usuario){ 
    const newUsuario = new usuarioSchema(usuario);
    const result = await newUsuario.save(usuario);
    return result;
 }

 module.exports.addFriend = async function(idUsuario,idAmigo){
    //NO SE PUEDE AGREGAR DOS VECES EL ID, HAY QUE TRABAJARLO
         let agregar = true;
         const usuarioEncontrado = await usuarioSchema.findById(idUsuario);
         try{
            for (let i = 0; i < usuarioEncontrado.usuariosAmigos.length; i++) {  
               if(usuarioEncontrado.usuariosAmigos[i] === idAmigo){
                  agregar =  false;
                   break; 
               }
            }
            if((agregar)&&(idAmigo!=idUsuario)){
               usuarioEncontrado.usuariosAmigos.push(idAmigo);
               const result = await usuarioEncontrado.save();
               return result; 
            }     
         }catch(err){
            console.log(err);
         }
                
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

 module.exports.numAmis = async function(id){
   const respues = await usuarioSchema.count({usuariosAmigos: id});
   return respues;
 }



