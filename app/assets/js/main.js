/**
 * Created by student on 17.11.16.
 */

$(document).ready(function () {

    $(".site-spinner").fadeOut("slow", function () {
        $(this).remove();
    });

    $("#owl-work").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 200,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true

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
        navigation: false, // Show next and prev buttons
        slideSpeed: 200,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true

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


$('.carousel').carousel({
    interval: 8000
});


document.getElementById("carousel-example-generic").addEventListener("click", function (event) {
    event.preventDefault()
});

function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}



