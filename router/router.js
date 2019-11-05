const express = require('express');
const router=express.Router();

const UsuarioController = require("../api/controllers/Usuarios.controller");
const PublicacionController = require("../api/controllers/Publicaciones.controllers");

router.get("/Usuarios", UsuarioController.get);
router.get("/Usuario/:id", UsuarioController.getByID);

router.get("/Publicaciones",PublicacionController.get);
router.get("/Publicacion/:id",PublicacionController.getByID);

router.post("/Usuario", UsuarioController.post);
router.post("/Publicacion", PublicacionController.post);

router.put("/Usuario/:id", UsuarioController.put);
router.put("/Publicacion/:id", PublicacionController.put);

router.delete("/Usuario/:id",UsuarioController.delete);
router.delete("/Publicacion/:id",PublicacionController.delete);

module.exports = router;