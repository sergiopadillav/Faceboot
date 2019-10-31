const express = require('express');
const router=express.Router();

const UsuarioController = require("../api/controllers/Usuarios.controller");
const PublicacionController = require("../api/controllers/Publicaciones.controllers");

router.get("/getUsuarios", UsuarioController.get);
router.get("/getUsuarioID/:id", UsuarioController.getByID);

router.get("/getPublicaciones",PublicacionController.get);
router.get("/getPublicaciones/:id",PublicacionController.getByID);

router.post("/saveUsuario", UsuarioController.post);
router.post("/savePublicacion", PublicacionController.post);

router.put("/updateUsuario/:id", UsuarioController.put);
router.put("/updatePublicacion/:id", PublicacionController.put);

router.delete("/deleteUsuario/:id",UsuarioController.delete);
router.delete("/deletePublicacion/:id",PublicacionController.delete);

module.exports = router;