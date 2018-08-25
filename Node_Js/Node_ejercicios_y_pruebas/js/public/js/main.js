$(document).ready(function() {
    var boton = $('#enviarInsert');
    var lista = $('#listaProyectos');

    // boton.on('click', function() {
    //     let data = $('#name').val();
    //     $.post('http://localhost:3000/proyectos/add', { name: data }, function(proyecto) {
    //         lista.append('<li class="proyecto" id="' + proyecto.id + '">' + proyecto.nombre +
    //             '<button class="eliminarProyecto">' + 'Eliminar</button>' +
    //             '<input type="text" class"nuevoNombre">' + '</li>');

    //     });
    // });

    boton.on('click', function() {
        let data = $('#insert').serialize();
        $.post('http://localhost:3000/proyectos/add', data, function(proyecto) {
            lista.append('<li class="proyecto" id="' + proyecto.id + '">' + proyecto.body.name + '  ' + proyecto.body.category +
                '<button class="eliminarProyecto">' + 'Eliminar</button>' +
                '<input type="text" class="nuevonombre">' + '</li>');

        });
    });

    $.get('http://localhost:3000/proyectos/', function(proyectos) {
        console.log(proyectos);
        proyectos.forEach(proyecto => {
            lista.append('<li class="proyecto" id="' + proyecto.id + '">' + proyecto.name +
                '<button class="eliminarProyecto">' + 'Eliminar</button>' +
                '<input type="text" class="nuevonombre">' + '</li>');
        });
    });

    lista.on('click', '.eliminarProyecto', function() {
        let id = $(this).parent().attr('id');
        $(this).parent().remove();
        $.post('http://localhost:3000/proyectos/delete', { id: id }, function(proyecto) {

        });
    });


    lista.on('change', '.nuevonombre', function() {
        let item = $(this).parent();
        let id = item.attr('id');
        let name = $(this).val();
        console.log(name);
        console.log(id);
        $.post('http://localhost:3000/proyectos/update', { id: id, name: name }, function(proyecto) {
            item.html(proyecto.name + '<button class="eliminarProyecto">' + 'Eliminar proyecto</button>' +
                '<input type="text" class="nuevonombre">');
        });
    });
});