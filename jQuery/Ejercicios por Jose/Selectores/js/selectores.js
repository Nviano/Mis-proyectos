$(document).ready(function () {

    //Selector de ID
    //$('#rojo').css('background-color', 'red');
    //$('#amarillo').css('color', 'yellow');
    //$('#verde').css('font-size', '30px');

    //Selector de clase
    //$(".cebra").css("border", "2px dashed black")
    //$(".border_solid").css("border", "1px solid black")

    //Selectores de etiqueta
    //var parrafos = $("p");

    /*for (let x = 0; x < parrafos.length; x++) {
        if (parrafos.eq(x).hasClass("cebra")) {
            parrafos.eq(x).removeClass("cebra");
        }
    }*/

    //$("p.cebra").addClass("azul");

    //Selectores de atributo
    //$('[title="Codespace"]').css('color','pink');
    //$('[href="https://www.google.com"]').css('color','red');
    $('[style="background-color:blue"').css('color', 'red');

    //Selectores de posición
    //Primera posición
    //$('#enlaces li:first-child').css('font-size','30px');
    //Última posición
    //$('#enlaces li:last-child').css('font-size','30px')
    //Accede al segundo elemento
    //$('#enlaces li:nth-child(2)').css('font-size','30px')
    //Pares
    //$('#enlaces li:nth-child(even)').css('background-color','yellow')
    //Impares
    //$('#enlaces li:nth-child(odd)').css('background-color','red')

    //children
    //var enlaces = $('#enlaces li').children();
    //console.log(enlaces);

    //find
    /*var caja = $('#caja .resaltado').parent().parent().find('[title="Codespace"]');
    console.log(caja);*/

    //next
    /*var hermano = $('#programacion').next();
    hermano.css('color','red');*/

})

