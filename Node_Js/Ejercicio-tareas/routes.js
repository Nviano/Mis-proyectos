var con = require('./config');
var app = require('./app');
//Rutas
app.get('/', function (req, res) {
    res.render('index');
});


//Consultar tareas
app.get('/tareas', function (req, res) {
    let sql = 'SELECT * from tarea';
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/example', function (req, res) {
    let sql = `SELECT * from tarea WHERE id = ${req.query.id}`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('example', {
                resultado: result
            });
        }
    });

    //next();
    //   }, function () {
    //         res.send(req.query.nombre);
});
//Añadir tareas
app.post('/tareas/add', function (req, res) {
    let sql = `INSERT INTO tarea (nombre) VALUES ('${req.body.nombre}')`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let tarea = {
                id: result.insertId,
                nombre: req.body.nombre,
                estado: req.body.estado
            }
            res.send(tarea);
        }
    });
});

//Eliminar tareas
app.post('/tareas/delete', function (req, res) {
    let sql = `DELETE FROM tarea where id = '${req.body.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

//Modificar tareas
app.post('/tareas/update', function (req, res) {
    let sql = `UPDATE tarea set estado='${req.body.estado}' where id = '${req.body.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let tarea = {
                estado: req.body.estado
            }
            res.send(tarea);
        }
    });
});

module.exports = con;
module.exports = app;