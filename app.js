const db_mongoose = require('./config/db_mongoose');
const routes = require('./routes/route');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const express = require('express');
var session = require('express-session');
const middlewares = require('./middlewares/middlewares');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'textosecreto',saveUninitialized:true,cookie:{maxAge: 30*60*1000}}));
app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.use(middlewares.logRegister,middlewares.sessionControl)
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect(db_mongoose.connection, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log('Conectado com o BD');
}).catch((err) => {        
    console.log(err);
});

app.use(    express.urlencoded({       extended:  true     }))

app.listen(8081,  function() {    
    console.log("Servidor online")
});