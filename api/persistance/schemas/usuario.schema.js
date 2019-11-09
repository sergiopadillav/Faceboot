const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const generosEnum = require("../enum/generos.enum")


const UsuarioSchema = new Schema({
nombre: { type: String, required: true, maxlength: 50},
   //PONER UNIQUE//
   usuario: { type: String, required: true, maxlength: 35},
   edad: { type: Number, required: true, min: 0, max:1000},
   sexo:{ type: String, required: true, maxlength: 1},
   contrasenia:{ type: String, required: true, maxlength: 35},
   //formato de la fecha
   fechaNacimiento: { type: Date, default: Date.now , require:false},
   generosMusicales:{type: String, required: false ,enum:generosEnum.getAll() },
   peliculasFavoritas: { type: [{
    nombre: { type: String, required: true, maxlength: 65 },
}], required: false },
usuariosAmigos: { type: [{
    usuario: { type: ObjectId, ref: "Usuario" }
}]}

}, {timestamps: true});


module.exports = mongoose.model("Usuario", UsuarioSchema, "usuarios");