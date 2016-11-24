/**
 * Created by student on 17.11.16.
 */

$(document).ready(function () {

    $(".site-spinner").fadeOut("slow", function () {
        $(this).remove();
    });


    var change = $('.change');

    change.each(function(){
        var imgSrc = $(this).children().attr('src');
        $(this).children("img").remove();
        $(this).css('background-image', 'url("'+imgSrc+'")');
    });


    $('#owl-main').owlCarousel({
        items: 1,
        margin: 0,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ['<span><img src="assets/img/arrow_left.png" width="50px" height="50px"></span>', '<span><img src="assets/img/arrow_right.png" width="50px" height="50px"></span>']

    });


    $("#owl-work").owlCarousel({

        items: 1,
        margin: 0,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });


    var contMasonry = $('.masonry');

    contMasonry.imagesLoaded(function () {
        contMasonry.isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
                columnWidth: 0,
                gutter: 0
            }
        })
    });

    $('.filter').on('click', '.categories', function (event) {

        event.preventDefault();
        var filterObject = $(this).data("filter");
        console.log(filterObject);
        contMasonry.isotope({
            filter: filterObject
        });

        $('.filter a').removeClass('active');
        $(this).closest('a').addClass('active');

    });

    $('#owl-quote').owlCarousel({
        items: 1,
        margin: 0,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000

    });



});


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


$(function () {

    var $meters = $(".skillbar-progress");
    var $section = $('#skills');

    function loadDaBars() {
        $meters.each(function () {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 6000);
        });
    }

    $(document).bind('scroll', function (ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

});


/*
document.getElementById("carousel-example-generic").addEventListener("click", function (event) {
    event.preventDefault()
});*/

function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}



