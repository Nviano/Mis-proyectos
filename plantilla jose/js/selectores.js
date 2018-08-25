$(document).ready(
    function() {
        //$('#rojo').css('background-color', 'red');
        //var prueba = $('.prueba');
        //prueba.css('border', '2px dashed black');


        //var parrafos = $("p");

        /*for (let x = 0; x < parrafos.length; x++) {
            if (parrafos.eq(x).hasClass("cebra")) {
                parrafos.eq(x).removeClass("cebra")
            }
        }*/

        /*var parrafos = $("p");

        for (let x = 0; x < parrafos.length; x++) {
            if (parrafos.eq(x).hasClass("cebra")) {
                parrafos.eq(x).addClass("azul")
            }
        }*/

        /*$('p.cebra').addClass('azul');

        var google = $('[title="Google"]');
        google.css('color', 'pink');
        var codespace = $('[href="https://www.codespaceacademy.com"]');
        codespace.css('color', 'green');
        var marca = $('[style="background-color:blue"]');
        marca.css('border', '2px solid black');*/

        $('[href="https://www.google.com"]').css('color', 'red');

        var hijo1 = $('#enlaces li:first-child');

        var ultimoHijo = $('#enlaces li:last-child');
        var hijo2 = $('#enlaces li:nth-child(2)');
        var pares = $('#enlaces li:nth-child(even)');
        var impares = $('#enlaces li:nth-child(odd)');
        var todosHijos = $('#enlaces').children();
        var resaltado = $('#caja').find('.resaltado');


        $('#enlaces li:nth-child(odd)').css('background-color', 'yellow').css('color', 'red');
        $('#enlaces li:nth-child(even)').css('background-color', 'red').css('color', 'yellow');
        console.log(resaltado);

        var caja = $('#caja2');
        var img = $('img');

        caja.on('mouseover', function() {
            $(this).css('background-color', 'red')
        })

        caja.on('mouseout', function() {
            $(this).css('background-color', 'white')
        })

        //Hover

        /*function cambiaRojo() {
            $(this).css('background-color', 'red')
        }

        function cambiaAzul() {
            $(this).css('background-color', 'blue')
        }
        caja.hover(cambiaRojo, cambiaAzul);



        function cambioVegeta() {
            $(this).attr('src', 'img/Vegeta.png')
        }

        function cambioGoku() {
            $(this).attr('src', 'img/goku.jpg')
        }

        img.hover(cambioVegeta, cambioGoku);*/

        /*var img = $('img');
        img.on('click', function() {
            $(this).attr('src', 'img/Vegeta.png')
        })
        img.on('dbclick', function() {
            $(this).attr('src', 'img/Vegeta.png')
        })

        var boton = $('#boton');
        boton.on('click', function() {
            img.attr('src', 'img/Vegeta.png')
        })

        var cajatexto = $('#nombre');
        var texto = "";
        cajatexto.on('focus', function() {
            texto = $(this).val();
            console.log(texto);
        })

        cajatexto.on('blur', function() {
            if ($(this).val() == "") {
                caja.text('El campo no puede estar vacio');
            }
        })*/

        caja.on('mousedown', function() {
            $(this).css('background-color', 'blue')
        })
        caja.on('mouseup', function() {
            $(this).css('background-color', 'green')
        });

        img.on('mousedown', function() {
            $(this).attr('src', 'img/Vegeta.png')
        })
        img.on('mouseup', function() {
            $(this).attr('src', 'img/goku.jpg')
        });




    })