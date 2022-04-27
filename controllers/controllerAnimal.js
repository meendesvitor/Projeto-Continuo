const { redirect } = require('express/lib/response');
const Animal = require('../models_nosql/animal.js');


module.exports = {

    async getCreate(req, res) {
        res.render('animal/animalCreate');
    },
    async postCreate(req, res) {

        const { nome, proprietario, endereco, tipo, raca } = req.body;
        const imagem = req.imageName;
        console.log(imagem);
        const animal = new Animal({ nome, proprietario, endereco, tipo, raca, imagem });
        await animal.save();
        res.redirect('/home');


    },
    async getList(req, res) {
        Animal.find().then((animal) => {
            res.render('animal/animalList', { animal: animal.map(animal => animal.toJSON()) });
        });
    },

    async getEdit(req, res) {
        await Animal.findOne({ _id: req.params.id }).then((animal) => {
            res.render('animal/animalEdit', { animal: animal.toJSON() });
        });
    },


    async postEdit(req, res) {
        await Animal.findOneAndUpdate({ _id: req.body.id }, req.body);
        
        res.redirect('/animalList');
    },

    async getAlert(req, res) {

        res.render('animal/alertaDelete', { _id: req.params.id });
        // res.redirect('animal/animalList');
    },

    async getDelete(req, res) {

        await Animal.findOneAndRemove({ _id: req.params.id });
        res.redirect('/animalList');


    }

}