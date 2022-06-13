const express = require('express');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerAnimal = require('../controllers/controllerAnimal');
const controllerAPI = require('../controllers/controllerAPI');
const controllerProfessor = require('../controllers/controllerDiretor');
const route = express.Router();

module.exports = route;

const multer = require('multer');
const controllerDiretor = require('../controllers/controllerDiretor');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/")
    },
    filename: (req, file, cb) => {
        req.imageName = req.body.nome + '.png'
        cb(null, req.imageName)
    },
})
const upload = multer({ storage })

route.post("/animalCreate", upload.single('imagem'), controllerAnimal.postCreate);
route.post("/animalEdit", upload.single('imagem'), controllerAnimal.postEdit);


//Home
route.get("/home", function(req, res) {
    res.render('home');
});

route.get("/logout", controllerUsuario.getLogout);

//Controller Usuario
//Usuario - Login e Recuperação de Senha
//Teste git ihuuu
route.get("/", controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
route.get("/recuperarSenha/:login", controllerUsuario.getRecuperarSenha);
route.post("/recuperarSenha", controllerUsuario.postRecuperarSenha);

//Usuario - CRUD
route.get("/usuarioCreate", controllerUsuario.getCreate);
route.post("/usuarioCreate", controllerUsuario.postCreate);
route.get("/usuarioList", controllerUsuario.getList);
route.get("/usuarioList", controllerUsuario.getList);
route.get("/usuarioEdit/:id", controllerUsuario.getEdit);
route.post("/usuarioEdit", controllerUsuario.postEdit);
route.get("/usuarioDeleteTela/:id", controllerUsuario.getAlert);
route.get("/usuarioDelete/:id", controllerUsuario.getDelete);

//Controller Animal
//Animal-CRUD

route.get("/animalCreate", controllerAnimal.getCreate);
route.post("/animalCreate", controllerAnimal.postCreate);
route.get("/animalList", controllerAnimal.getList);
route.get("/animalEdit/:id", controllerAnimal.getEdit);
route.post("/animalEdit", controllerAnimal.postEdit);
route.get("/alertaDelete/:id", controllerAnimal.getAlert);
route.get("/animalDelete/:id", controllerAnimal.getDelete);

//API
route.get("/api/animal/:id", controllerAPI.getAnimalById);
route.get("/api/animal", controllerAPI.getAnimal);
route.post("/api/animal", controllerAPI.postAnimal);
route.put('/api/animal/:id', controllerAPI.putAnimal);
route.delete('/api/animal/:id', controllerAPI.deleteAnimal);
route.get("/", (req, res) => { res.sendFile(path.join(__dirname + '../view/animalList')) });

//Router_professor
route.get("/diretorCreate", controllerDiretor.getCreate);
route.post("/diretorCreate", controllerDiretor.postCreate);
route.get("/usuarioList", controllerDiretor.getList);
route.get("/usuarioList", controllerDiretor.getList);
route.get("/usuarioEdit/:id", controllerDiretor.getEdit);
route.post("/usuarioEdit", controllerDiretor.postEdit);
route.get("/usuarioDeleteTela/:id", controllerDiretor.getAlert);
route.get("/usuarioDelete/:id", controllerDiretor.getDelete);
route.get("/logout", controllerDiretor.getLogout);

//Controller Usuario
//Usuario - Login e Recuperação de Senha
route.get("/", controllerDiretor.getLogin);
route.get("/login_Diretor", controllerDiretor.getLogin);
///route.get("/recuperarSenha/:login", controllerUsuario.getRecuperarSenha);
//route.post("/recuperarSenha", controllerUsuario.postRecuperarSenha);