$(document).ready(function () {
    //Zona de variables
    var añadirTarea = $('#anadirTarea');
    var tareaText = $('#tareaText');
    var tareasPendientes = $('#tareasPendientes');
    var tareasParaProbar = $('#tareasParaProbar');
    var tareasRealizadas = $('#tareasRealizadas');
    var estado = 'pendiente';
    tareasPendientes.sortable();
    tareasParaProbar.sortable();
    tareasRealizadas.sortable();


    $.get('tareas', function (tareas) {
        tareas.forEach(tarea => {
            let miTarea = '<li class="tareas" id="' + tarea.id +
                '" data-estado="' + tarea.estado + '">' + tarea.nombre +
                '<button class="btn btn-danger ml-3"> Eliminar tarea </button></li>';
            if (tarea.estado === 'pendiente') {
                tareasPendientes.append(miTarea);
            } else if (tarea.estado === 'paraProbar') {
                tareasParaProbar.append(miTarea);
            }
            else if (tarea.estado === 'realizada') {
                tareasRealizadas.append(miTarea);
            }
        });
    });
    //Invocamos el evento click del boton con id anadirTarea
    añadirTarea.on('click', function () {
        // let tarea = tareaText.val();
        // if (tarea != "") {
        //     $.post('tareas/add', { nombre: tarea, estado: estado },
        //         function (tarea) {
        //             tareasPendientes.append('<li class="tareas" id="' + tarea.id +
        //                 '" data-estado="' + tarea.estado + '">' + tarea.nombre +
        //                 '<button class="btn btn-danger ml-3 "> Eliminar tarea </button></li>');
        //         });
        // }
        window.location.href="example?id=32";
    });
    $('ul').on('click', '.tareas', function () {
        let tarea = $(this);
        let id = tarea.attr('id');
        //Comprobamos el valor del data-attribute estado
        if (tarea.attr('data-estado') === 'pendiente') {
            estado = 'paraProbar'
        }
        //Comprobamos el valor del data-attribute estado
        else if (tarea.attr('data-estado') === 'paraProbar') {
            estado = 'realizada'
        }
        $.post('tareas/update', { id: id, estado: estado },
            function (res) {
                tarea.attr('data-estado', res.estado);
                tarea.parent().parent().next().find('ul').append(tarea);
            });
    });

    $('ul').on('click', '.btn-danger', function () {
        let tarea = $(this).parent();
        let id = tarea.attr('id');
        tarea.remove();
        $.post('tareas/delete', { id: id },
            function (res) {
                
            });
    })
});

