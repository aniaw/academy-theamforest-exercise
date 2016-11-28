$(function () {

    var $meters = $(".skillbar-progress");
    var $section = $('#skills');

    function loadDaBars() {
        $meters.each(function () {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 2000);
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

$( document ).ready(function() {
    /* activate jquery isotope */
    var $container = $('#posts').isotope({
        itemSelector : '.item',

        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.item'
        }
    });

    $container.isotope({ filter: '*' });
    // filter items on button click
    $('#filters').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
});


$(document).ready(function() {
    $('.right21').on('mouseenter', function() {
        $(this).addClass('highlight');
        $(this).animate({'left': '20px', 'opacity': '1'}, 'fast');

    });
    $('.right21').on('mouseleave', function() {
        $(this).addClass('highlight');
        $(this).animate({'left': '0px', 'opacity': '1'}, 'fast');

    });

});

