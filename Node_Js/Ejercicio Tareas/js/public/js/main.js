$(document).ready(function() {
    var boton = $('#anadirTarea');
    var lista = $('#tareasPendientes');
    var estado = "pendiente";
    var probar = $('#tareasParaProbar');
    var realizada = $('#tareasRealizadas');


    //Añade tarea a la tabla

    boton.on('click', function() {
        let data = $('#tarea').val();
        $.post('http://localhost:3000/tarea/add', { tarea: data, estado: estado }, function(pendiente) {
            lista.append('<li class="pendiente" id="' + pendiente.id + '">' +
                pendiente.body.tarea +
                '<button class="eliminar btn-danger ml-4">' + 'Eliminar</button>' + '</li>');

        });
    });
    //Recorre los elementos de la tabla

    $.get('http://localhost:3000/tarea/', function(tarea) {
        tarea.forEach(pendiente => {

            if (pendiente.estado == 'pendiente') {
                lista.append('<li class="pendiente" id="' + pendiente.Id + '">' +
                    pendiente.nombre + '<button class="eliminar btn-danger ml-4">' +
                    'Eliminar</button>' + '</li>');

            } else if (pendiente.estado == 'probar') {
                probar.append('<li class="probar" id="' + pendiente.Id + '">' +
                    pendiente.nombre + '<button class="eliminar btn-danger ml-4">' +
                    'Eliminar</button>' + '</li>');

            } else {
                realizada.append('<li class="realizada" id="' + pendiente.Id + '">' +
                    pendiente.nombre + '<button class="eliminar btn-danger ml-4">' +
                    'Eliminar</button>' + '</li>');
            }
        })


    });

    //Elimina elementos de la tabla

    lista.on('click', '.eliminar', function() {
        let id = $(this).parent().attr('id');
        $(this).parent().remove();
        $.post('http://localhost:3000/tarea/delete', { id: id }, function() {

        });
    });

    probar.on('click', '.eliminar', function() {
        let id = $(this).parent().attr('id');
        $(this).parent().remove();
        $.post('http://localhost:3000/tarea/delete', { id: id }, function() {

        });
    });

    realizada.on('click', '.eliminar', function() {
        let id = $(this).parent().attr('id');
        $(this).parent().remove();
        $.post('http://localhost:3000/tarea/delete', { id: id }, function() {

        });
    });

    //Modificar elementos 

    $('ul').on('click', '.pendiente', function() {
        let tarea = $(this);
        let id = $(this).attr('id');
        let texto = $(this).text();
        tarea.removeClass('pendiente');
        tarea.addClass('probar');
        $.post('http://localhost:3000/tarea/probar', { id: id, estado: "probar" }, function(pendiente) {
            probar.append(tarea);
        });

    })

    $('ul').on('click', '.probar', function() {
        let tarea = $(this);
        let id = $(this).attr('id');
        let texto = $(this).text();
        tarea.removeClass('probar');
        tarea.addClass('realizada');
        $.post('http://localhost:3000/tarea/realizada', { id: id, estado: "realizada" }, function(pendiente) {
            realizada.append(tarea);
        });

    })
});