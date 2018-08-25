var con = require('./config');
var app = require('./app');

//Rutas
// app.get('/', function(req, res) {
//     res.status(200).send(
//         '<h1>Página de inicio</h1>'
//     );
// });

app.get('/', function(req, res) {
    res.render('index');
});

// app.get('/test2', function(req, res) {
//     res.send({
//         message: 'conexion exitosa2'
//     });
// });

//Añadir proyectos
app.post('/proyectos/add', function(req, res) {
    let sql = `INSERT INTO proyectos (name,categoria,lenguaje,fecha) VALUES ('${req.body.name}','${req.body.category}','${req.body.language}','${req.body.date}')`;
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            let proyecto = {
                id: result.insertId,
                body: req.body
            }
            res.send(proyecto);
        }
    });

});

// app.post('/proyectos/add', function(req, res) {
//     let sql = `INSERT INTO proyectos (name) VALUES ('${req.body.name}')`;
//     con.query(sql, function(err, result) {
//         if (err) {
//             res.send(err);
//         } else {
//             let proyecto = {
//                 id: result.insertId,
//                 nombre: req.body.name
//             }
//             res.send(proyecto);
//         }
//     });

// });


app.get('/proyectos', function(req, res) {
    let sql = 'SELECT * from proyectos';
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//Eliminar registros
app.post('/proyectos/delete', function(req, res) {
    let sql = `DELETE FROM proyectos where id = '${req.body.id}'`;
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//Modificar registros
app.post('/proyectos/update', function(req, res) {
    let sql = `UPDATE proyectos set name='${req.body.name}' where id = '${req.body.id}'`;
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            let proyecto = {
                name: req.body.name
            }
            res.send(proyecto);
        }
    });
});