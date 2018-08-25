$(document).ready(function () {    
    //Ejercicio 2.1
    var ul = $('ul').parent().parent().find('#contenedor-parrafos p:first-child').css('font-size','30px');

    //Ejercicio 2.2
    var ul = $('#contenedor-parrafos p:last-child').parent().parent().find('ul li:last-child').css('color','green');

    //Ejercicio 2.3
    var elemento4 = $('ul li:nth-child(4)').parent().parent().parent().parent().parent().find('body').css('background-color','blue');
});