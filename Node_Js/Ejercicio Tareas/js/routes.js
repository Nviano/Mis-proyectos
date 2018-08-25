var con = require('./config');
var app = require('./app');

//Rutas


app.get('/', function(req, res) {
    res.render('index');
});


//Añadir proyectos
app.post('/tarea/add', function(req, res) {
    console.log(req);
    let sql = `INSERT INTO tarea (nombre,estado) VALUES ('${req.body.tarea}', '${req.body.estado}')`;
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            let pendiente = {
                id: result.insertId,
                body: req.body
            }
            res.send(pendiente);
        }
    });

});

//Recorre los registros

app.get('/tarea', function(req, res) {
    let sql = 'SELECT * from tarea';
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//Eliminar registros
app.post('/tarea/delete', function(req, res) {
    let sql = `DELETE FROM tarea where Id = '${req.body.id}'`;
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//Modificar las tareas

app.post('/tarea/probar', function(req, res) {
    let sql = `UPDATE tarea set estado='${req.body.estado}' where Id = '${req.body.id}'`;
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            let probar = {
                id: req.body.id
            }
            res.send(probar);
        }
    });
});

app.post('/tarea/realizada', function(req, res) {
    let sql = `UPDATE tarea set estado = '${req.body.estado}' where Id = '${req.body.id}'`;
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);

        } else {
            let realizada = {
                id: req.body.id
            }
            res.send(realizada);
        }
    })
})