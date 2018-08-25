$(document).ready(function() {

    $.validate({
        lang: 'es'
    });
    $('body').css("background-image", "url(./images/fondo-negro.jpg)");


    var admin = $('#formadmin');
    var player = $('#formplayer');
    var club = $('#formclub');

    admin.hide('slow');
    player.hide('slow');
    club.hide('slow');

    $('#staff').on('click', function() {
        player.hide('slow');
        club.hide('slow');
        admin.show('slow');
        $('body').css("background-image", "url(./images/25___UTAH_JAZZ.jpg)");
        $('form').addClass("formulario");


    });

    $('#jugador').on('click', function() {
        club.hide('slow');
        admin.hide('slow');
        player.show('slow');
        $('body').css("background-image", "url(./images/orig_222782.jpg)");
    });

    $('#club').on('click', function() {
        admin.hide('slow');
        player.hide('slow');
        club.show('slow');
    });

});