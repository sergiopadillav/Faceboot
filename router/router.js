const express = require('express');
const router=express.Router();
const UsuarioController = require("../api/controllers/Usuarios.controller");
const PublicacionController = require("../api/controllers/Publicaciones.controllers");
const middlewares = require("../api/middlewares/middlewares");
const LoginController = require("../api/controllers/Login.controller");

router.get("/Usuarios", UsuarioController.get);
router.get("/Usuario/:id", UsuarioController.getByID);
router.get("/PublicacionTags", PublicacionController.getTags);

router.get("/Publicaciones",PublicacionController.get);
router.get("/Publicacion/:id",PublicacionController.getByID);
router.get("/numPublicaciones/:id", PublicacionController.numPublicaciones);
router.get("/numAmigos/:id",middlewares.tokenMiddleware, UsuarioController.numAmigos);

router.post("/Usuario", UsuarioController.post);
router.post("/login", LoginController.logIn);

router.post("/Publicacion", middlewares.tokenMiddleware,PublicacionController.post);

router.put("/Usuario/:id", middlewares.tokenMiddleware,UsuarioController.put);
router.put("/AgregarAmigo/:idUsuario",middlewares.tokenMiddleware,UsuarioController.putFriend);
router.put("/Tag/:id",middlewares.tokenMiddleware,PublicacionController.putTag);

router.put("/Publicacion/:id", middlewares.tokenMiddleware,PublicacionController.put);


router.delete("/Usuario/:id", middlewares.tokenMiddleware,UsuarioController.delete);
router.delete("/Publicacion/:id", middlewares.tokenMiddleware,PublicacionController.delete);

router.delete("/myPost/:id", middlewares.tokenMiddleware,PublicacionController.deleteMyPost);
router.delete("/myComent/:id", middlewares.tokenMiddleware,PublicacionController.deleteUserComents);
router.get("/MyPost/:id",PublicacionController.getMyPosts);


module.exports = router;