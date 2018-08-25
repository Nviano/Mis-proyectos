'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    codUsuario: String,
    userName: String,
    fechaAlta: String,
    imagen: String
}, { collection: 'usuario' });

//Exportar el modelo
module.exports = mongoose.model('usuario', UsuarioSchema);

//Getter and Setter

function setCodUsuario(codUsuario) {
    this.codUsuario = codUsuario;
}

function setUserName(userName) {
    this.userName = userName;
}

function setFechaAlta(fechaAlta) {
    this.fechaAlta = fechaAlta;
}

function setImagen(imagen) {
    this.imagen = imagen;
}