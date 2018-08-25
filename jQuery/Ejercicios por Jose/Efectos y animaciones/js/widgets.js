$(document).ready(function() {


    var mostrar = $('#mostrar');
    var caja = $('#cajaEfectos');

    mostrar.on('click', function() {
        // caja.toggle('explode');
        // caja.toggle('blind');
        // caja.toggle('drop');
        // caja.toggle('fold');
        // caja.toggle('puff');
        // caja.toggle('scale');
        // caja.toggle('shake');
        caja.toggle('shake', 200);

    })
    var botonPopup = $('#lanzarDialog');
    var cuadroDialogo = $('#popup');
    botonPopup.on('click', function() {
        cuadroDialogo.dialog();
    })
    $('#calendario').datepicker();


    //$('#popup').dialog();

    $(document).tooltip();

    $('#tabs').tabs();

    //caja.toggle('blind');


});