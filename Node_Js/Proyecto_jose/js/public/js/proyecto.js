$(document).ready(function() {

    $('.botonF1').hover(function () {
        $('.button').addClass('animacionVer');
    })
    $('.contenedor').mouseleave(function () {
        $('.button').removeClass('animacionVer');
    })

    $('body').css("background-image", "url(./images/fondo2.jpg)");

    $(".botonF3").click(function() {
        $('body').css("background-image", "url(./images/escritorio.jpg)");
    });

    $(".botonF2").click(function() {
        $('body').css("background-image", "url(./images/fondo2.jpg)");
    });

    $(".botonF4").click(function() {
        $('body').css("background-image", "url(./images/fondo3.jpg)");
    });

    

    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function() {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function() {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function() {
        $("#myCarousel").carousel(2);
    });


    // Enable Carousel Controls
    $(".left").click(function() {
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function() {
        $("#myCarousel").carousel("next");
    });




});