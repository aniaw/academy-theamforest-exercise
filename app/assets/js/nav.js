/**
 * Created by student on 21.11.16.
 */
/*$(document).ready(function () {
 $(document).on("scroll", onScroll);

 $('a[href^="#"]').on('click', function (e) {
 e.preventDefault();
 $(document).off("scroll");

 $('a').each(function () {
 $(this).removeClass('current');
 });
 $(this).addClass('current');

 var target = this.hash,
 menu = target;
 $target = $(target);
 $('html, body').stop().animate({
 'scrollTop': $target.offset().top + 2
 }, 500, 'swing', function () {
 window.location.hash = target;
 $(document).on("scroll", onScroll);

 });
 });


 function onScroll(event) {
 var scrollPosition = $(document).scrollTop();
 $('nav li a').each(function () {
 var currentLink = $(this);
 var refElement = $(currentLink.attr("href"));
 console.log(refElement);
 if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
 $('.main-menu li a').removeClass("current");
 currentLink.addClass("current");
 }
 else {
 currentLink.removeClass("current");
 }
 });
 }

 });*/


$(document).ready(function () {


    offset = $('.navbar').outerHeight();
    $('#navi li a[href^="#"]').click(function (event) {

        // Prevent from default action to intitiate
        event.preventDefault();

        //remove active from all anchor and add it to the clicked anchor
        $('#navi li a[href^="#"]').removeClass("current")
        $(this).addClass('current');

        // The id of the section we want to go to
        var anchorId = $(this).attr('href');

        // Our scroll target : the top position of the section that has the id referenced by our href
        if(anchorId.length)
        var target = $(anchorId).offset().top - offset;
        console.log(target);

        $('html, body').stop().animate({scrollTop: target}, 500, function () {
            window.location.hash = anchorId;
        });

        return false;
    });

//check the pages when scroll event occurs
    $(window).scroll(function () {
        // Get the current vertical position of the scroll bar
        position = $(this).scrollTop();
        $('#navi li a[href^="#"]').each(function () {
            var anchorId = $(this).attr('href');
            if (anchorId.length) {
                var target = $(anchorId).offset().top - offset;
            }
            // check if the document has crossed the page
            console.log(position, target);
            if (position >= target) {
                //remove active from all anchor and add it to the clicked anchor
                $('#navi li a[href^="#"]').removeClass("current")
                $(this).addClass('current');
            }
        })
    });
    $(function () {
        //set our scroll state after dom ready
        $(window).scroll();
    })

});