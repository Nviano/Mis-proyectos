$(document).ready(function() {
    $("#lista").css('font-size', '20px');
    $("#elemento1").css('color', 'green');

    var list = $("li");

    for (let x = 0; x < list.length; x++) {
        if (list.eq(x).hasClass("rojo")) {
            list.eq(x).removeClass("rojo");
            list.eq(x).addClass("azul");
        }
    }

    $('#lista li:nth-child(odd)').css('border', '1px solid black');
    $('#lista li:nth-child(even)').css('border', '1px dashed blue');
    $('#lista li:nth-child(3)').css('margin-bottom', '30px');
    $('[href="https://www.botanical-online.com/nabo_propiedades_curativas.htm"]').css('color', 'pink');
    $('[title="recetas_nabo"]').css('font-size', '30px');

    var parrafo1 = $('ul').parent().parent().find('p:eq(0)');
    parrafo1.css('font-size', '30px');

    var parrafo2 = $('p:eq(1)').parent().parent().find('li:eq(4)');
    parrafo2.css('color', 'purple');

    var colorFondo = $('li:eq(3)').parent().parent().parent().parent();
    colorFondo.css('background-color', 'grey');


})