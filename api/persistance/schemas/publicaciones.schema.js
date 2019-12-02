const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const PublicacionesSchema= new Schema({
    autorPublicacion: { type: ObjectId, ref: "Usuario"},
    createdAt: { type: Date, default: Date.now, require:false },
    tipoPublicacion: {type: Boolean, required: false , default: true },
    contenido:{type: String, required: true, maxlength: 300},
    tags:{type:[{
        tag: { type: String, required: false, maxlength: 30 }
    }]},
    comentarios: { type: [{
        texto: { type: String, required: false, maxlength: 300 },
        createdAt: { type: Date,required: false, default: Date.now },
        autor: { type: ObjectId, ref: "Usuario" }
    }]}
}, {timestamps: true});

module.exports = mongoose.model("Publicacion", PublicacionesSchema, "publicaciones");