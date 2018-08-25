var con = require('../config');
var bcrypt = require('bcrypt-nodejs');

var login = {
    loginStaff: function(req, res) {
        let sql = `SELECT * from administrador where email ='${req.body.email}'`;
        con.query(sql, function(err, result) {
            if (err) {
                return res.send(err);
            } else {
                if (result == "") {
                    return res.send('Email introducido no válido');
                } else {
                    bcrypt.compare(req.body.password, result[0].password, function(err, iguales) {
                        if (err) {
                            return res.send(err)
                        } else {
                            if (iguales) {
                                return res.send(result);
                            } else {
                                return res.send('La contraseña no es correcta')
                            };
                        };
                    });
                };
            };
        });
    },

    loginPlayer: function(req, res) {
        let sql = `SELECT * from jugador where email ='${req.body.email}'`;
        con.query(sql, function(err, result) {
            if (err) {
                return res.send(err);
            } else {
                if (result == "") {
                    return res.send('Email introducido no válido');
                } else {
                    bcrypt.compare(req.body.password, result[0].password, function(err, iguales) {
                        if (err) {
                            return res.send(err)
                        } else {
                            if (iguales) {
                                return res.send(result);
                            } else {
                                return res.send('La contraseña no es correcta')
                            };
                        };
                    });
                };
            };
        });
    },

};















module.exports = login;