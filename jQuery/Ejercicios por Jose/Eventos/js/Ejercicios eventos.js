//Ejercicio tres en raya
$(document).ready(function () {
    var valor = true;
    var celda = $('.celda');
    var cursor = $('#cursor');

    celda.on('click', function () {
        let celda = $(this);
        if (celda.text() == "") {
            celda.text(pintar(valor));
        }
    })

    function pintar(valor_a_pintar) {
        if (valor_a_pintar) {
            valor = !valor;
            return ("x");
        } else {
            valor = !valor;
            return ("o");
        }
    }
//Ejercicio cursor
$(document).on('mousemove', function(){
        cursor.css('left', event.clientX)
              .css('top', event.clientY);
     });
 
})