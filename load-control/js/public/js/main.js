$(document).ready(function() {

    var boton = $('#btn');
    var botonplayer = $('#btnplayer');
    var botonclub = $('#btnclub');
    var lista = $('#equipos');
    var lista2 = $('#equiposplayer');
    var td = $('#listadocrud');
    var registerForm = $('#formulario');
    var loginButton = $('#loginButton');
    var loginForm = $('#loginForm');


    boton.on('click', function() {
        let data = registerForm.serialize();
        $.post('http://localhost:3000/administrador/add', data, function(formulario) {
            alert(res.nombre + ' ha sido registrado correctamente');

        });
    });

    botonplayer.on('click', function() {
        let data = $('#formularioplayer').serialize();
        $.post('http://localhost:3000/jugador/add', data, function(formulario) {

        });
    });

    botonclub.on('click', function() {
        let data = $('#formularioclub').serialize();
        $.post('http://localhost:3000/club/add', data, function(formulario) {

        });
    });

    $.get('http://localhost:3000/club/', function(club) {
        club.forEach(club => {
            lista.append('<option value="' + club.IdClub + '" class="clubes" id="' + club.IdClub + '">' + club.nombre);
            lista2.append('<option value="' + club.IdClub + '" class="clubes" id="' + club.IdClub + '">' + club.nombre);
        });
    });

    /*  $.get('http://localhost:3000/jugador/', function(jugador) { 
         jugador.forEach(jugador => {
             td.append('<tr id="' + jugador.IdJugador + '">' + 
             '<td value="'+ jugador.IdClub + '" class="jugadores" >'
             + jugador.IdJugador + '</td>'
             + '<td>' + jugador.nombre + '</td>'
             + '<td>' + jugador.apellido1 + '</td>'
             + '<td>' + jugador.email + '</td>'
             + '<td>' + jugador.IdClub + '</td>'
             + '<td>' + jugador.peso + '</td>'
             + '<td>' + jugador.posicion + '</td>' 
             + '<td>' + '<a href= modificar.html title=Modificar data-toggle=tooltip>' +
             '<i class="far fa-edit">' + '</i>' + '</a>' +
             '<a href="#" class="eliminarplayer" title= Eliminar data-toggle=tooltip>' +
             '<i class="far fa-trash-alt ">' + '</i>' + '</a>' + '</td>' + '</tr>');
         });
     }); */

    td.on('click', '.eliminarplayer', function() {
        let id = $(this).parent().parent().attr('id');
        $(this).parent().parent().remove();
        $.post('http://localhost:3000/jugador/delete', { id: id }, function(jugador) {

        });
    });

    $('.equipo').on('click', function() {
        var club = $(this).attr('id')
        let clear = $('#listadocrud tr');
        clear.remove();
        $.get('http://localhost:3000/jugador/clubes', { id: club }, function(jugador) {

            jugador.forEach(jugador => {
                td.append('<tr id="' + jugador.IdJugador + '">' +
                    '<td value="' + jugador.IdClub + '" class="jugadores" >' +
                    jugador.IdJugador + '</td>' +
                    '<td>' + jugador.nombre + '</td>' +
                    '<td>' + jugador.apellido1 + '</td>' +
                    '<td>' + jugador.email + '</td>' +
                    '<td>' + jugador.IdClub + '</td>' +
                    '<td>' + jugador.peso + '</td>' +
                    '<td>' + jugador.posicion + '</td>' +
                    '<td>' + '<a href= "vistaperfil?id=' + jugador.IdJugador +
                    '"title = detalles data-toggle=tooltip>' +
                    '<i class="fas fa-eye">' + '</i>' + '</a>' +
                    '<a href= modificar?id=' + jugador.IdJugador +
                    ' title=Modificar data-toggle=tooltip>' +
                    '<i class="far fa-edit">' + '</i>' + '</a>' +
                    '<a href="#" class="eliminarplayer" title= Eliminar data-toggle=tooltip>' +
                    '<i class="far fa-trash-alt ">' + '</i>' + '</a>' + '</td>' + '</tr>');
            });
        });

    });
    $('#modificaplayer').on('click', function() {
        let formModificado = $('#formularioplayer').serialize();
        $.post('http://localhost:3000/jugador/modificar', formModificado, function(jugador) {});
        formModificado.remove();
    });

    loginButton.on('click', function() {
        let data = loginForm.serialize();
        $.post('/jugador/login', data, function(res) {
            console.log(res)
        });
    });




});