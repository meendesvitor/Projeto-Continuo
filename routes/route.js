const express = require('express');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerAnimal = require('../controllers/controllerAnimal');
const route = express.Router();

module.exports = route;
route.get("/home", function(req, res) { res.render('home') });

route.get("/", controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
route.get("/recuperarSenha/:login", controllerUsuario.getRecuperarSenha);
route.post("/recuperarSenha", controllerUsuario.postRecuperarSenha);

route.get("/usuarioCreate", controllerUsuario.getCreate);
route.post("/usuarioCreate", controllerUsuario.postCreate);
route.get("/usuarioList", controllerUsuario.getList);


route.get("/animalCreate", controllerAnimal.getCreate);
route.post("/animalCreate", controllerAnimal.postCreate);
route.get("/animalList", controllerAnimal.getList);