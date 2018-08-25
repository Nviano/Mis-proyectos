$(document).ready(function() {

    //$('#datos').load('https://reqres.in/');


    // $.get('https://reqres.in/api/users?page=2', function(res) {
    //     console.log(res);
    // })


    // $.get('https://reqres.in/api/users', { page: 2 }, function(res) {
    //     console.log(res);
    // })
    // var datos = $('#datos');
    // $.get('https://reqres.in/api/users', { page: 2 }, function(res) {
    //     let respuesta = res.data;
    //     respuesta.forEach(element => {
    //         datos.append('<p>' + element.first_name + ', ' +
    //             element.last_name + '</p>' + '<img src="' +
    //             element.avatar + '">')
    //     });

    // })


    // var usuario = {
    //     'name': 'Jose',
    //     'job': 'developer'
    // }

    // $.post('https://reqres.in/api/users', usuario, function(response) {
    //     console.log(response);
    // })


    // $('#enviarForm').on('click', function() {
    //     let name = $('#name').val();
    //     let job = $('#job').val();
    //     let usuario = {
    //         'name': name,
    //         'job': job
    //     }
    //     $.post('https://reqres.in/api/users', usuario, function(response) {
    //         console.log(response);
    //     });
    // });

    // $('#enviarForm').on('click', function() {
    //     let email = $('#email').val();
    //     let password = $('#password').val();
    //     let usuario = {
    //         'email': email,
    //         'password': password
    //     }

    // $.post('https://reqres.in/api/login', usuario, function(response) {
    //     console.log(response);
    // });

    // $.ajax({
    //     type: 'POST',
    //     url: 'https://reqres.in/api/users',
    //     data: usuario,
    //     beforeSend: function() {
    //         alert('¿Estas seguro?')
    //     },

    //     success: function() {
    //         console.log('Peticion realizada')
    //     },
    //     error: function() {
    //         console.log('error')
    //     },
    //     timeout: 2000

    // });
    $('#enviarForm').on('click', function() {
        let email = $('#email').val();
        let password = $('#password').val();
        let usuario = {
            'email': email,
            'password': password
        }
        $.ajax({
            type: 'POST',
            url: 'https://reqres.in/api/login',
            data: usuario,
            beforeSend: function(response) {
                alert('¿Son correctos los datos?')
            },

            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                console.log(response)
            },
            timeout: 2000

        });
    });







});