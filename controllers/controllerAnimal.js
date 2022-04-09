const Animal = require('../models_nosql/animal');


module.exports = {

    async getCreate(req, res) {
        res.render('animal/animalCreate');
    },
    async postCreate(req, res) {

        const { nome, proprietario, endereco, tipo, raca } = req.body;
        const animal = new Animal({ nome, proprietario, endereco, tipo, raca });

        await animal.save(function(err){
            if(err){
                console.log(err);
            }     else {
                res.redirect('/home');
            }
           
        });
   
    },
    async getList(req, res) {
        Animal.find().then((animal) => {
            res.render('animal/animalList', { animal: animal.map(animal => animal.toJSON()) });
        });
    }
}