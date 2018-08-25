//Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//Initialize variables
var app = express();

// Body parser configuration
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application json
app.use(bodyParser.json());

// Importar rutas
var movieRoutes = require('./routes/movie');

// Connection with db
mongoose.connection.openUri('mongodb://localhost:27017/movieDB', (err,res) => {
    if(err) throw err;
    console.log('Database is \x1b[32m%s\x1b[0m', 'running');
});

// Routes
app.use('/movie', movieRoutes);


//Listen Petitions
app.listen(3000, () => {
    console.log('Server is \x1b[32m%s\x1b[0m in http://localhost:3000', 'running');
});