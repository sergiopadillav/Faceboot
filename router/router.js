const express = require('express');
const router=express.Router();

const UsuarioController = require("../api/controllers/Usuarios.controller");
const PublicacionController = require("../api/controllers/Publicaciones.controllers");
const middlewares = require("../api/middlewares/middlewares");

router.get("/Usuarios", UsuarioController.get);
router.get("/Usuario/:id", UsuarioController.getByID);
//AUN NO QUEDA router.get("/Tags/:id", PublicacionController.getTags);

router.get("/Publicaciones",PublicacionController.get);
router.get("/Publicacion/:id",PublicacionController.getByID);

router.post("/Usuario", middlewares.tokenMiddleware,UsuarioController.post);
router.post("/LogIn", UsuarioController.logIn);

router.post("/Publicacion", middlewares.tokenMiddleware,PublicacionController.post);

router.put("/Usuario/:id", middlewares.tokenMiddleware,UsuarioController.put);
router.put("/AgregarAmigo/:idUsuario/:idAmigo",middlewares.tokenMiddleware,UsuarioController.putFriend);

router.put("/Publicacion/:id", middlewares.tokenMiddleware,PublicacionController.put);


router.delete("/Usuario/:id", middlewares.tokenMiddleware,UsuarioController.delete);
router.delete("/Publicacion/:id", middlewares.tokenMiddleware,PublicacionController.delete);

module.exports = router;