var con = require('../config');
var bcrypt = require('bcrypt-nodejs');

var login = {
    loginPersona: function(req, res) {
        console.log(req.body);
        let sql = `SELECT * from persona where email ='${req.body.email}'`;
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
                                req.session.user = {

                                    'id': result[0].idPersona,
                                    'user': result[0].nombre,
                                    'email': result[0].email
                                }
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