$(document).ready(function () {
    var dds = $('dd');
    dds.hide();

    //Solucion
    $('dt').on('mouseenter', function () {
        dds.slideUp(200);
        $(this).next().slideDown(200);
    })
});