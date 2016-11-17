/**
 * Created by student on 17.11.16.
 */


$('.carousel').carousel({
    interval: 5000
})

$(".slidingDiv").hide();


$('.show_hide').click(function () {
    $(".slidingDiv").toggle("slide", {direction:'right'});
});
