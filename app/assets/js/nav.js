/**
 * Created by student on 21.11.16.
 */
$(document).ready(function () {


    offset = $('.navbar').outerHeight();
    $('#navi li a[href^="#"]').click(function (event) {

        // Prevent from default action to intitiate
        event.preventDefault();

        //remove active from all anchor and add it to the clicked anchor
        $('#navi li a[href^="#"]').removeClass("current")
        $(this).addClass('current');
        document.getElementById("mySidenav").style.display = "none";

        // The id of the section we want to go to
        var anchorId = $(this).attr('href');

        // Our scroll target : the top position of the section that has the id referenced by our href
        if(anchorId.length) {
            var target = $(anchorId).offset().top;
        }

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