var express = require('express');
var bodyParser = require('body-parser');
var port = 8000;
var app = express();
var session = require('express-session');

//Configuracion de archivos

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Creacion del servidor
app.listen(port, () => {
    console.log('Esto va como un tiro');
});

//Configuracion de sesiones
app.use(session({
    secret: 'cadena aleatoria',
    resave: true,
    saveUninitialized: true
}));


//Exporta este archivo al index
module.exports = app;