$(document).ready(function () {
    var add_enlaces = $('#add_button');
    var add_text = $('#add_text');
    var menu = $('#menu_enlaces');

    //reloadLinks();


    /*enlaces.each(function(i){
        let enlace = $(this);
        let texto_enlace = enlace.text();
        enlace.attr('href',texto_enlace);
    })*/
    //prepend
    /*add_enlaces.on('click', function () {
    let nuevo_enlace = add_text.val();
    menu.prepend('<li><a href="' + nuevo_enlace + '"></a></li>');
    reloadLinks();
})*/

    //before
    /*add_enlaces.on('click', function () {
        let nuevo_enlace = add_text.val();
        menu.before('<li><a href="' + nuevo_enlace + '"></a></li>');
        reloadLinks();
    })*/

    //after
        /*add_enlaces.on('click', function () {
        let nuevo_enlace = add_text.val();
        menu.after('<li><a href="' + nuevo_enlace + '"></a></li>');
        reloadLinks();
    })*/


});

/*function reloadLinks() {
    let enlaces = $('a');
    enlaces.each(function (i) {
        let enlace = $(this);
        let texto_enlace = enlace.attr('href');
        enlace.text(texto_enlace);
    });
};*/



