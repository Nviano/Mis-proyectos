$(document).ready(function() {
    var elementos = $('.elemento');
    var lista = $('.listaOrdenable');
    var area = $('#area');
    var movido = $('#elemento-movido');
    //Draggable
    elementos.draggable().resizable();
    //Resizable
    //elementos.resizable();
    //Selectable
    //lista.selectable();
    //Sortable
    lista.sortable({
        update: function() {
            console.log('Ha cambiado la lista');
        }
    });
    //lista.sortable();
    //Droppable
    movido.draggable();
    area.droppable({
        drop: function() {
            $(this).css('background-color', 'yellow')
        }
    });
})