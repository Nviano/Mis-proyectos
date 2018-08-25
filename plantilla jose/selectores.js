$(document).ready(function () {

    //Selector de ID
    $("p#rojo").addClass("azul");
    $('#rojo').css('background-color','red').css('color','yellow');//.css('background-color', 'red');
    //$('#amarillo').css('color', 'yellow');
    //$('#verde').css('font-size', '30px');

    //Selector de clase
    //var prueba = $('.prueba');
   //prueba.eq(0).css('color', 'yellow');
    //$(".cebra").css("border", "2px dashed black")
    //$(".border_solid").css("border", "1px solid black")

    //Selectores de etiqueta
    /*var parrafos = $("p");

    for (let x = 0; x < parrafos.length; x++) {
        if (parrafos.eq(x).hasClass("cebra")) {
            parrafos.eq(x).removeClass("cebra");
        }
    }*/

  

    //Selectores de atributo
   /*var google =  $('[title="Google"]');
   google.css('color', 'pink');
   var codespace = $('[href="https://www.codespaceacademy.com"]');
   codespace.css('color', 'green');
   var marca = $('[style="background-color:blue"]');
   console.log(marca);*/
    //$('[title="Codespace"]').css('color','pink');
    //$('[href="https://www.google.com"]').css('color','red');

    //Selectores de posición
    //Primera posición
    //var hijo1 = $('#enlaces li:first-child');
    //var ultimohijo = $('#enlaces li:last-child');
    //var segundohijo = $('#enlaces li:nth-child(2)');
    //var pares = $('#enlaces li:nth-child(even)');
    //var impares = $('#enlaces li:nth-child(odd)');


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

