const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const PublicacionesSchema= new Schema({
    autor: { type: String, required: true, maxlength: 35},
    createdAt: { type: Date, default: Date.now },
    tipoPublicacion: { type: String, required: true, maxlength: 20},
    contenido:{type: String, required: true, maxlength: 300},
    tags:{type: [{
        tag: { type: String, required: true, maxlength: 30 }
    }]},
    comentarios: { type: [{
        texto: { type: String, required: true, maxlength: 300 },
        createdAt: { type: Date,required: true, default: Date.now },
        autor: { type: String, required: true, maxlength: 35}
    }]}
}, {timestamps: true});

module.exports = mongoose.model("Publicacion", PublicacionesSchema, "publicaciones");