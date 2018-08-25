$(document).ready(function() {


    //----------------------------1------------------------------------
    // var datos = $('#datos');
    // $.get('https://jsonplaceholder.typicode.com/posts ', function(res) {
    //     let respuesta = res;
    //     respuesta.forEach(element => {
    //         if (element.userId % 2 == 0) {
    //             datos.append('<p>' + element.userId + ', ' +
    //                 element.title + '</p>')
    //         }

    //     });

    // })

    //-------------------------------2--------------------------------------
    // var datos = $('#datos');
    // $.get('https://jsonplaceholder.typicode.com/todos,', function(res) {
    //     let respuesta = res;
    //     respuesta.forEach(element => {
    //         if (element.completed == true) {
    //             datos.append('<p class="verde">' + element.title + '</p>')
    //         } else {
    //             datos.append('<p class="rojo">' + element.title + '</p>')
    //         }
    //     });

    // })

    //--------------------------------3----------------------------------------

    var datos = $('#datos')
    $('#enviarForm').on('click', function() {
        let id = $('#id').val();
        let album = {
            'userId': id,
        }
        $.get('https://jsonplaceholder.typicode.com/albums', album, function(response) {
            let respuesta = response;
            respuesta.forEach(element => {
                datos.append('<p>' + element.id + element.title + '</p>')
            });
        });
    });
});