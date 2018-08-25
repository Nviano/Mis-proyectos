var con = require('../config');
var bcrypt = require('bcrypt-nodejs');


//Inserta tanto jugadores como staff en sus tablas de BBDD
var controller = {
    addPersona: function(req, res) {
        console.log(req.body);
        let rol = 1;
        let password = req.body.password;
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, null, function(err, hash) {
                password = hash;
                if (req.body.altura && req.body.peso && req.body.posicion) {
                    rol = 2;
                }
                let sql = `INSERT INTO persona (nombre,apellidos,telefono,email,password,
            rol,fechaNacimiento,pais,idClub) 
        VALUES ('${req.body.nombre}','${req.body.apellidos}',
        '${req.body.telefono}','${req.body.email}','${password}','${rol}',
        '${req.body.fechaNacimiento}','${req.body.pais}','${req.body.club}')`;

                con.query(sql, function(err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        if (rol == 2) {
                            let sql2 = `INSERT INTO jugador (idPersona,altura,peso,posicion) 
                        VALUES ('${result.insertId}','${req.body.altura}','${req.body.peso}','${req.body.posicion}')`;
                            con.query(sql2, function(err, result2) {
                                if (err) {
                                    console.log(err);
                                    res.send(err);
                                }
                            })
                        }
                        let user = {
                            id: result.insertId,
                            nombre: req.body.nombre
                        }
                        return res.send(req.body);

                    }
                });
            });
        })
    },

    //Recoge los clubes de base de datos para mostrarlos en los registros
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

    //Trae los campos requeridos de base de datos para mostrarlos en el crud
    getPlayers: function(req, res) {
        let sql = `SELECT P.idPersona,P.nombre,P.apellidos,P.email,P.idClub,P.pais,P.rol
        ,J.altura, J.posicion,J.peso FROM persona 
        AS P INNER JOIN jugador AS J ON P.idPersona= J.idPersona`;
        con.query(sql, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },

    //Trae los jugadores registrados en cada club en el crud
    getClubes: function(req, res) {
        let sql = `SELECT P.idPersona,P.nombre,P.apellidos,P.email,P.idClub,P.pais,P.rol
        ,J.altura, J.posicion,J.peso FROM persona 
        AS P INNER JOIN jugador AS J ON P.idPersona= J.idPersona 
        where idClub = '${req.query.id}'`;
        con.query(sql, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },


    //Borra los jugadores desde el crud
    deletePlayer: function(req, res) {
        let sql = `DELETE FROM jugador where idPersona = '${req.body.id}'`;
        console.log(req.body);
        con.query(sql, function(err, result) {

            if (err) {
                console.log(err);
                res.send(err);
            } else {
                let sql2 = `DELETE FROM persona where idPersona = '${req.body.id}'`;
                con.query(sql2, function(err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        res.send(result);
                        console.log(result);
                    }
                })
            }
        });
    },

    //Manda los datos modificados del jugador a BBDD
    updatePlayer: function(req, res) {

        let sql = `UPDATE persona set nombre ='${req.body.nombre}', 
        apellidos= '${req.body.apellidos}',
        telefono= '${req.body.telefono}' ,
        email= '${req.body.email}', password = '${req.body.password}' 
        where idPersona = '${req.body.id}'`;
        console.log(sql);
        con.query(sql, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                let sql2 = `UPDATE jugador set altura= '${req.body.altura}', 
                peso= '${req.body.peso}' where idPersona = '${req.body.id}'`
                con.query(sql2, function(err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        res.send(result);
                        console.log(result);
                    }
                })
            }
        });
    },

    //LLeva los datos del jugador a la pag de modificar el perfil del jugador
    getUpdatePlayer: function(req, res) {
        let sql = `SELECT P.idPersona,P.nombre,P.apellidos,P.email,P.password,
        P.telefono, J.posicion,J.peso FROM persona 
        AS P INNER JOIN jugador AS J ON P.idPersona= J.idPersona
        where P.idPersona = '${req.query.id}'`;

        con.query(sql, function(err, result) {

            if (err) {
                res.send(err);
            } else {
                console.log(result);
                res.render('modificar', {
                    resultado: result,
                });
            }
        });
    },

    //Trae los datos del perfil de un jugador para mostrarlos en la vista del crud
    getPlayer: function(req, res) {
        let sql = `SELECT P.idPersona,P.nombre,P.apellidos,P.email,P.idClub,P.pais,P.rol
        ,P.fechaNacimiento,P.telefono,J.altura, J.posicion,J.peso FROM persona 
        AS P INNER JOIN jugador AS J ON P.idPersona= J.idPersona 
        where P.idPersona = '${req.query.id}'`;

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