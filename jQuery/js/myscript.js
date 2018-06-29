$(function() {
    $("h2").hide(100).delay(100).show(100);
});

$(function() {
    $(".jumbotron p").css({color:"green"});
});

$(function(){
    $(".jbutton").on('click', function() {
        var cardId = $(this).attr('data-cardid');
        $("#"+cardId).toggle(500);
    });
});

$(function() {
    $("#cardbtn1").on('click', function() {
        $('#card1').fadeOut(300).fadeIn(300);
    });
});

$(function() {
    $("#cardbtn2").on('click', function() {
        $('#card2').fadeOut(300).fadeIn(300);
    });
});

$(function() {
    $("#cardbtn3").on('click', function() {
        $('#card3').fadeOut(300).fadeIn(300);
    });
});

$(document).ready(function() {
    $("#button").click(function() {
        $("#text").slideToggle("fast", function() {
            alert("Element says Hi!");
        });
    });
});

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});