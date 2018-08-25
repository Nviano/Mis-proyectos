$(document).ready(function () {
    //MouseOver y MouseOut
    var caja = $('#caja');
    var img = $('img');
    /*caja.on('mouseover', function(){
        $(this).css('background-color', 'red')
    })
    caja.on('mouseout',function(){
        $(this).css('background-color', 'white')
    })*/

    //Hover
    /*function cambiaRojo() {
        $(this).css('background-color', 'red')
    }
    function cambiaAzul() {
        $(this).css('background-color', 'blue')
    }
    caja.hover(cambiaRojo, cambiaAzul);
*/
    //Click y doble click

    //Click
    /*var imagen = $('img');
    imagen.on('click', function () {
        $(this).attr('src', 'img/Vegeta.png');
    })

    //Doble click
    imagen.on('dblclick', function () {
        $(this).attr('src', 'img/Vegeta.png');
    })*/

    //Focus y blur
    /*var cajatexto = $('#nombre');
    var texto = "";
    cajatexto.on('focus', function(){
     texto = $(this).val();
        console.log(texto);
    })
    cajatexto.on('blur', function () {
        if ($(this).val() == "") {
            caja.text('El campo no puede estar vacío');
        }
    });*/

    //mousedown y mouseup
    /*caja.on('mousedown', function(){
        $(this).css('border-color', 'blue');
    })
    caja.on('mouseup',function(){
        $(this).css('border-color', 'green');
    });*/

    /*img.on('mousedown', function(){
        $(this).attr('src', 'img/Vegeta.png');
    }).on('mouseup',function(){
        $(this).attr('src', 'img/goku.jpg');
    });*/

    //mousemove
    /*caja.on('mousemove', function(){
       console.log('me estoy moviendo');
    })*/
    /*caja.on('mousemove', function(){
       console.log('x:' + event.clientX + ' , y:' + event.clientY);
    })
    $(document).on('mousemove', function(){
       console.log('x:' + event.clientX + ' , y:' + event.clientY);
    })*/

    /*$(document).on('mousemove', function () {
        $('body').css('cursor', 'none');
        caja.css('left', event.clientX)
            .css('top', event.clientY);
    })*/

});
