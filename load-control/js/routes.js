var LoginUsers = require('./controllers/loginusers');
var UsersController = require('./controllers/usuarios');
var app = require('./app');
app.post('/usersplayer/register', UsersController.addPlayer);
app.post('/users/register', UsersController.addStaff);




//Rutas

//Consultar club
app.get('/club', UsersController.getClub);

//Consultar clubes de jugadores
app.get('/jugador/clubes', UsersController.getClubes);

//Consultar jugadores
app.get('/jugador', UsersController.getPlayer);

//Añadir Jugadores
app.post('/jugador/add', UsersController.addPlayer);

//Añadir Admin
app.post('/administrador/add', UsersController.addStaff);


//Eliminar jugadores
app.post('/jugador/delete', UsersController.deletePlayer);

//Modificar jugadores
app.post('/jugador/modificar', UsersController.updatePlayer);

//Consultar jugador
app.get('/modificar', UsersController.getUpdatePlayer);

//Perfil jugador
app.get('/vistaperfil', UsersController.getPlayer);

//Login Staff
app.post('/users/loginstaff', LoginUsers.loginStaff);

//Login Player
app.post('/users/loginplayer', LoginUsers.loginPlayer);


app.get('/index', function(req, res) {
    res.render('index');
});

app.get('/crud', function(req, res) {
    res.render('crud');
});

app.get('/form', function(req, res) {
    res.render('form');
});





/* app.get('/modificar', function(req, res) {
    let sql = `SELECT * from jugador where IdJugador= '${req.query.id}'`;

    con.query(sql, function(err, result) {

        if (err) {
            res.send(err);
        } else {
            res.render('modificar', {
                resultado: result,
                nacimiento: result[0].fechaNacimiento.toString().slice(0, 15)
            });
        }
    });

}); */

//Añadir staff a tabla administrador

/* app.post('/administrador/add', function(req, res) {
    let sql = `INSERT INTO administrador (nombre,apellido1,apellido2,telefono,email,password,
        fechaNacimiento,pais,IdClub) 
    VALUES ('${req.body.nombre}','${req.body.apellido1}','${req.body.apellido2}',
    '${req.body.telefono}','${req.body.email}','${req.body.password}',
    '${req.body.fechaNacimiento}','${req.body.pais}','${req.body.clubes}')`;

    con.query(sql, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            let formulario = {
                id: result.insertId,
                body: req.body
            }
            res.send(formulario);
        }
    });

}); */

//Añadir jugador 

/* app.post('/jugador/add', function(req, res) {
    let sql = `INSERT INTO jugador (nombre,apellido1,apellido2,telefono,email,password,
        fechaNacimiento,pais,IdClub,altura,peso,posicion) 
    VALUES ('${req.body.nombre}','${req.body.apellido1}','${req.body.apellido2}',
    '${req.body.telefono}','${req.body.email}','${req.body.password}',
    '${req.body.fechaNacimiento}','${req.body.pais}','${req.body.clubes}',
    '${req.body.altura}','${req.body.peso}','${req.body.posicion}')`;

    con.query(sql, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            let formulario = {
                id: result.insertId,
                body: req.body
            }
            res.send(formulario);
        }
    });

}); */

//Añadir club

app.post('/club/add', function(req, res) {
    let sql = `INSERT INTO club (nombre,pais,ciudad) 
    VALUES ('${req.body.nombre}','${req.body.pais}','${req.body.ciudad}')`;

    con.query(sql, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            let formularioclub = {
                id: result.insertId,
                body: req.body
            }
            res.send(formularioclub);
        }
    });

});

//Consultar a base de datos

/* app.get('/club', function(req, res) {
    let sql = 'SELECT * from club';
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/jugador', function(req, res) {
    let sql = 'SELECT * from jugador';
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/jugador/clubes', function(req, res) {
    let sql = `SELECT * from jugador where IdClub = '${req.query.id}'`;
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}); */



//Eliminar del crud el jugador 

/* app.post('/jugador/delete', function(req, res) {
    let sql = `DELETE FROM jugador where IdJugador = '${req.body.id}'`;
    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}); */

//Modificar jugadores

/* app.post('/jugador/modificar', function(req, res) {
    let sql = `UPDATE jugador set nombre ='${req.body.nombre}', apellido1= '${req.body.apellido1}',
    apellido2= '${req.body.apellido2}', telefono= '${req.body.telefono}' ,
    email= '${req.body.email}', password = '${req.body.password}', 
    pais= '${req.body.pais}',
    altura= '${req.body.altura}', peso= '${req.body.peso}' 
    where IdJugador = '${req.body.IdJugador}'`;

    con.query(sql, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            let tarea = {
                estado: req.body.estado
            }
            res.send(tarea);
        }
    });


}); */