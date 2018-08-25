var con = require('./config');
var app = require('./app');

//Rutas

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/formulario', function(req, res) {
    res.render('formulario');
});

app.get('/reloj', function(req, res) {
    res.render('reloj');
});

app.get('/serpiente', function(req, res) {
    res.render('serpiente');
});