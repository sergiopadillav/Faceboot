const UsuarioSchema = require("../schemas/usuario.schema");
const tokensMiddleware = require("../../middlewares/tokens");
const config = require("../../../config");
module.exports.logIn = async function(usuario,contrasenia){
    const usuarioBD= await UsuarioSchema.findOne({'usuario':usuario});
    if(usuarioBD){
      if(usuarioBD.contrasenia==contrasenia){
        const token = await tokensMiddleware.generateToken(usuarioBD.id,usuarioBD.usuario);
        const usuarioBD2 = await UsuarioSchema.findOne({'usuario':usuario},{contrasenia:0});
        const usuarioAuntenticado = {usuarioBD2,token}
        return usuarioAuntenticado;
      }else{
        console.log("Contraseña incorrecta");
      }
    }else{
        console.log("Usuario no encontrado");
    } 
   
}