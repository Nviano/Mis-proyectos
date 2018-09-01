var con = require('../config');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
const COOKIE_SECRET = '9847048yrf08fh08wyf348';
require('dotenv').config();

var login = {
    loginPersona: function (req, res) {
        const { email, password } = req.body;

        let sql = `SELECT * from persona where email ='${req.body.email}'  `;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                if (result == "") {
                    return res.send('Email introducido no válido');
                } else {
                    bcrypt.compare(req.body.password, result[0].password, function (err, iguales) {
                        if (err) {
                            return res.send(err)
                        } else {
                            if (iguales) {
                                jwt.sign({id: result[0].idPersona, email, password },process.env.COOKIE_SECRET, { expiresIn: '2h' }, (error, TOKEN) => {
                                    console.log(error);
                                    if (error) return res.status(500).json({ error: 'ERROR SIGNING THE TOKEN' });
                                    res.cookie('access_token', TOKEN, {
                                        maxAge: new Date(Date.now() + 1000000),
                                        httpOnly: false,
                                    });
                                    console.log(result);
                                    return res.status(200).json({ message: 'User logged with success' });
                                });
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