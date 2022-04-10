const express = require('express');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerAnimal = require('../controllers/controllerAnimal');
const route = express.Router();

module.exports = route;

//Home
route.get("/home", function(req, res) { res.render('home') });

//Controller Usuario
//Usuario - Login e Recuperação de Senha
route.get("/", controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
route.get("/recuperarSenha/:login", controllerUsuario.getRecuperarSenha);
route.post("/recuperarSenha", controllerUsuario.postRecuperarSenha);
//Usuario - CRUD
route.get("/usuarioCreate", controllerUsuario.getCreate);
route.post("/usuarioCreate", controllerUsuario.postCreate);
route.get("/usuarioList", controllerUsuario.getList);

//Controller Receita
//Receita-CRUD
route.get("/animalCreate", controllerAnimal.getCreate);
route.post("/animalCreate", controllerAnimal.postCreate);
route.get("/animalList", controllerAnimal.getList);