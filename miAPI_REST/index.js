'user strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Usuario = require('./modelos/usuario');
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/REST_db', (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos...${err}`);
    } else {
        console.log('Establecida conexión a base de datos...');
    }
});
app.listen(3001, () => {

    console.log('API REST arrancadooooo en el puerto http://localhost:3001');
});




//Obtener todos los usuarios
app.get('/api/usuario', (req, res) => {
    console.log("Haciendo GET....");
    Usuario.find((err, Usuarios) => {

        if (err) {

            res.sendStatus(500).send(`Ha ocurrido un error: ${err}`);

        } else {

            res.json(Usuarios);
        }

    });

});


//Obtener un usuario por su id
app.get('/api/usuario/:id', (req, res) => {

    let id = req.params.id;
    console.log(id);
    Usuario.findById(id, (err, Usuario) => {

        if (err) {

            res.sendStatus(500).send(`Ha ocurrido un error: ${err}`);

        } else {

            res.json(Usuario);
        }

    });
});

//Crear un usuario
app.post('/api/usuario', (req, res) => {
    console.log('Haciendo POST...');
    console.log(req.body);
    console.log(res.body);

    let Usuario = new Usuario();
    // let usuario = bodyParser(req.body);
    usuario.codUsuario = req.body.codUsuario;
    usuario.userName = req.body.userName;
    usuario.fechaAlt = req.body.fechaAlt;
    usuario.imagen = req.body.imagen;

    let miUsuario = req.body;


    //Guardamos el registro en base de datos
    Usuario.save((err, Usuario) => {
        if (err) {
            res.status(500).send({ message: `Error al guardar el usuario: ${err}` });
        } else {
            res.status(200).send({ miUsuario });
        }
    });

});

//Modificar un usuario
app.put('/api/usuario/:id', (req, res) => {

    let miUsuario = req.body;
    console.log(miUsuario);
    let id = req.params.id;
    Usuario.findById(id, (err, Usuario) => {

        if (err) {

            res.sendStatus(500).send(`Ha ocurrido un error: ${err}`);

        } else {

            Usuario.update(miUsuario, (err, respuesta) => {
                if (err) {
                    res.status(500).send({ message: `Error al eliminar el usuario: ${err}` });
                } else {
                    res.status(200).send(miUsuario);
                }

            });
        }

    });
});

//Eliminar un usuario
app.delete('/api/usuario/:id', (req, res) => {

    let id = req.params.id;
    Usuario.findById(id, (err, Usuario) => {

        if (err) {

            res.sendStatus(500).send(`Ha ocurrido un error: ${err}`);

        } else {

            Usuario.remove((err, Usuario) => {
                if (err) {
                    res.status(500).send({ message: `Error al eliminar el usuario: ${err}` });
                } else {
                    res.status(200).send({ Usuario });
                }

            });
        }

    });
})