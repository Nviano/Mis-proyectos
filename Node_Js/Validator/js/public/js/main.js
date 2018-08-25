$(document).ready(function() {


    var boton = $('#enviar');



    boton.on('click', function() {
        let data = $('#formularioContacto').serialize();
        $.post('http://localhost:3000/usuario/add', data, function(formulario) {

        });
    });

});