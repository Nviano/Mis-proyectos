$(document).ready(function() {


    var add_enlaces = $('#add_button');
    var add_text = $('#add_text');
    var menu = $('#menu_enlaces');


    add_enlaces.on('click', function() {
        let nuevo_enlace = add_text.val();
        $('.fijo').append('<div>' + nuevo_enlace + ' <button class="btn btn-primary pendiente mover">Pasar</button></div>');
    })
    addTarea.on('click', function() {
        let tarea = addTexto.val();
        $('#pendiente').append('<div><button id="pasaProbar" class="btn btn-primary" \
        id="addTarea">Pasar a Probar</button> ' + tarea + '</div>');

        pasaProbar.on('click', function() {
            $('#probar').append('<div><button id="pasaRealizado" class="btn btn-primary" \
        >Pasar a Realizar</button> ' + tarea2 + '</div>');

        })

        $('#container2').on('click', '.mover', function() {
            if ($(this).hasClass("pendiente")) {
                $(this).removeClass("pendiente")
                $(this).addClass("probar")
                let nuevo_enlace2 = $('.fijo2')
                nuevo_enlace2.append($(this).parent())
            } else if ($(this).hasClass("probar")) {
                $(this).removeClass("probar")
                $(this).addClass("realizada")
                let nuevo_enlace3 = $('.fijo3')
                nuevo_enlace3.append($(this).parent())
            }


        })




    })


})