$(document).ready(function () {
    //Zona de variables
    var cambiar_text = $('#cambiar_text');
    var tabla_num = $('#tabla_num');
    var anadir_linea = $('#anadir_linea');
    var tabla = $('table');
    var tabla_mul = 0;
    var contador = 0;

    //inicializo con la tabla 0
    tabla_num.text(tabla_mul);

    //Evento click para recoger el cambio de la tabla que vamos a mostrar, 
    //inicializa el contador de nuevo y que a su vez llama a otra funcion 
    //que borra los registros ya escritos.
    $('#cambiar_tabla').on('click', function () {
        if (cambiar_text.val() != "") {
            tabla_num.text(cambiar_text.val());
            tabla_mul = cambiar_text.val();
            contador = 0;
            borrarTabla();
        }
    });

    //Evento click para añadir las diferentes lineas
    anadir_linea.on('click', function () {
        let linea = '<tr>' +
            '<td>' + tabla_mul + '</td>' +
            '<td>x</td>' +
            '<td>'+contador+'</td>' +
            '<td>=</td>' +
            '<td>' + tabla_mul * contador + '</td>' +
            '</tr>';
       tabla.append(linea);
       contador++;
    });
});

//funcion que compueba si existen registros, y si es así, los borra
function borrarTabla(){
    let tds = $('td');
    if(tds.length>0)
    {
        for(let i=0; i< tds.length;i++){
            tds.eq(i).remove();
        }
    }
}