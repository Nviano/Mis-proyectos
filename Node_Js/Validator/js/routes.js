var con = require('./config');
var app = require('./app');

//Rutas


app.get('/', function(req, res) {
    res.render('index');
});

//Añadir proyectos

app.post('/usuario/add', function(req, res) {
    let sql = `INSERT INTO usuario (nombre,telefono,email,direccion,fnacimiento) 
    VALUES ('${req.body.nombre}','${req.body.telefono}','${req.body.email}',
    '${req.body.direccion}','${req.body.fnacimiento}')`;

    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            let formulario = {
                id: result.insertId,
                body: req.body
            }
            res.send(formulario);
        }
    });

});