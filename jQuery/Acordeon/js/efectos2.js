$(document).ready(function () {

    var caja = $('#caja dd');
    caja.hide();

    $('dt').on('mouseover', function(){
        $(this).next().slideDown('slow');
    })

    $('dt').on('mouseout', function(){
        $(this).next().slideUp('slow');
    })

});