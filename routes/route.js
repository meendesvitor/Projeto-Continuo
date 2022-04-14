const express = require('express');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerAnimal = require('../controllers/controllerAnimal');
const route = express.Router();

module.exports = route;
route.get("/home", function(req, res) {
    //if (req.cookies.userData) {
    //console.log(req.cookies.userData.login);\
    if (req.session.login) {
        console.log(req.session.login);
        res.render('home')
    } else
        res.redirect('/')
});
//Home
route.get("/home", function(req, res) { res.render('home') });

//Controller Usuario
//Usuario - Login e Recuperação de Senha
route.get("/logout", controllerUsuario.getLogout);
route.get("/", controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
route.get("/logout", controllerUsuario.getLogout);
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
route.get("/animalEdit/:id", controllerAnimal.getEdit);
route.post("/animalEdit", controllerAnimal.postEdit);
route.get("/animalDelete/:id", controllerAnimal.getDelete);