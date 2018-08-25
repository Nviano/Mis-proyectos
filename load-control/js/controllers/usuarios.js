var con = require('../config');
var bcrypt = require('bcrypt-nodejs');

var controller = {
    addPlayer: function(req, res) {
        let password = req.body.password;
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, null, function(err, hash) {
                password = hash;
                let sql = `INSERT INTO jugador (nombre,apellido1,apellido2,telefono,email,password,
            fechaNacimiento,pais,IdClub,altura,peso,posicion) 
        VALUES ('${req.body.nombre}','${req.body.apellido1}','${req.body.apellido2}',
        '${req.body.telefono}','${req.body.email}','${password}',
        '${req.body.fechaNacimiento}','${req.body.pais}','${req.body.clubes}',
        '${req.body.altura}','${req.body.peso}','${req.body.posicion}')`;

                con.query(sql, function(err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        let user = {
                            id: result.insertId,
                            nombre: req.body.nombre
                        }
                        return res.send(user);

                    }
                });
            });
        })
    },


    addStaff: function(req, res) {
        let password = req.body.password;
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, null, function(err, hash) {
                password = hash;
                let sql = `INSERT INTO administrador (nombre,apellido1,apellido2,telefono,email,password,
            fechaNacimiento,pais,IdClub) 
        VALUES ('${req.body.nombre}','${req.body.apellido1}','${req.body.apellido2}',
        '${req.body.telefono}','${req.body.email}','${password}',
        '${req.body.fechaNacimiento}','${req.body.pais}','${req.body.clubes}')`;

                con.query(sql, function(err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        let user = {
                            id: result.insertId,
                            nombre: req.body.nombre
                        }
                        return res.send(user);


                    }
                });
            });
        })
    },

    getClub: function(req, res) {
        let sql = 'SELECT * from club';
        con.query(sql, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },

    getPlayer: function(req, res) {
        let sql = 'SELECT * from jugador';
        con.query(sql, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },

    getClubes: function(req, res) {
        let sql = `SELECT * from jugador where IdClub = '${req.query.id}'`;
        con.query(sql, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },



    deletePlayer: function(req, res) {
        let sql = `DELETE FROM jugador where IdJugador = '${req.body.id}'`;
        con.query(sql, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },

    updatePlayer: function(req, res) {
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
    },

    getUpdatePlayer: function(req, res) {
        let sql = `SELECT * from jugador where IdJugador= '${req.query.id}'`;

        con.query(sql, function(err, result) {

            if (err) {
                res.send(err);
            } else {
                console.log(result);
                res.render('modificar', {
                    resultado: result,
                    nacimiento: result[0].fechaNacimiento.toString().slice(0, 15)
                });
            }
        });
    },

    getPlayer: function(req, res) {
        let sql = `SELECT * from jugador where IdJugador= '${req.query.id}'`;

        con.query(sql, function(err, result) {

            if (err) {
                res.send(err);
            } else {

                res.render('vistaperfil', {
                    resultado: result,
                    nacimiento: result[0].fechaNacimiento.toString().slice(0, 15)
                });
            }
        });
    }
}




module.exports = controller;