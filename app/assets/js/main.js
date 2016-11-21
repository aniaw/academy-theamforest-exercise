/**
 * Created by student on 17.11.16.
 */
$(function () {
    $(document).ready(function () {
        $(".site-spinner").fadeOut("slow");
    })
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
    interval: 1000
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

