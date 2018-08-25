var LoginUsers = require('./controllers/loginusers');
var UsersController = require('./controllers/usuarios');
var app = require('./app');
var request = require('request');
var sweetAlert = require('sweetalert');
var auth = function(req, res, next) {
    if (req.session.user)
        return next();
    else
        return res.sendStatus(404);
};



//Rutas

//Consultar club

app.get('/club', UsersController.getClub);

//Consultar clubes de jugadores
app.get('/persona/clubes', UsersController.getClubes);

//Consultar jugadores

app.get('/persona', UsersController.getPlayers);

//Añadir Persona

app.post('/addPersona', (req, res) => {
    let success = true;
    if (
        req.body.captcha === undefined ||
        req.body.captcha === '' ||
        req.body.captcha === null
    ) {
        success = false;
        return res.json({ "msg": "Debes rellenar el captcha" });
        /*swal("Muy mal amigo!", "Debes rellenar el captcha!", "error");*/
    } else {

        //Secret Key
        const secretKey = '6Lf8EWUUAAAAACXxVkWAkYlchbb8NT6ltO2BN8Li';

        //Verificar URL

        const verifyUrl = `https://google.com/recaptcha/api/siteverify?
    secret=${secretKey}&response=${req.body.captcha}
    &remoteip=${req.connection.remoteAddress}`;

        //Respuesta para la verificacion de URL

        request(verifyUrl, (err, response, body) => {
            body = JSON.parse(body);

            //Si no es satisfactoria
            if (!success) {
                console.log(success);
                return res.json({ "msg": "Fallo de verificacion de captcha" });

            }

            //Si es satisfactoria

            UsersController.addPersona(req, res);
        });
    }
});




//Eliminar jugadores

app.post('/persona/delete', UsersController.deletePlayer);

//Modificar jugadores

app.post('/jugador/modificar', UsersController.updatePlayer);

//Consultar jugador

app.get('/modificar', UsersController.getUpdatePlayer);

//Perfil jugador

app.get('/vistaperfil', UsersController.getPlayer);

//Login Persona

app.post('/users/loginPersona', LoginUsers.loginPersona);





app.get('/index', function(req, res) {
    res.render('index');
});
app.get('/staff', function(req, res) {
    res.render('staff');
});
app.get('/player', function(req, res) {
    res.render('player');
});
app.get('/club', function(req, res) {
    res.render('club');
});
app.get('/login', function(req, res) {
    res.render('login');
});
app.get('/crud', function(req, res) {
    res.render('crud');
});
app.get('/vistaperfil', function(req, res) {
    res.render('vistaperfil');
});
app.get('/modificar', function(req, res) {
    res.render('modificar');
});
app.get('/logueado', auth, function(req, res) {
    res.render('logueado', {
        email: req.session.user.email
    });
});
/*


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

*/