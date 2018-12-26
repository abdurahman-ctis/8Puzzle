// messages
var messages = ["CTIS - Web Technologies 1<br/>PROJECT<br/>Fall 2018", 
                "BY<br/>Abdurahman Atakishiyev<br/>21701324", 
                "<br/>Can you solve it?<br/>"];
var i = 1;

// init
$(function(){


    // Welcome screen
    $(".button").mouseenter(function(){
        $(this).css("cursor", "pointer");
    });

    // Button hover effect
    $(".button").hover(function(){
        $(this).css({background: "#34495e", color: "black"});
    }, function(){
        $(this).css({background: "white", color: "#34495e"});
    });

    var timer = setInterval(function() {
        
        $("#info p").fadeOut(500, function() {
            $(this).html(messages[i]).fadeIn(500);
            i = (i+1)%3;
        })

    }, 2000);

    $("#welcome > .button").click(function(){
        clearInterval(timer);
        $("#welcome").fadeOut(500, function(){
            $("#choose").fadeIn(500);
        });
        
    });

    // Choose screen

    $("img").click(function(){
        $("img").css('box-shadow', '0px 0px 0px');
        $(this).css('box-shadow', '0px 15px 15px #888');
        $("#choose > .button").fadeIn(500);
    });

    $("#choose > .button").click(function(){
        $("#choose").animate({left: "-=1000px", opacity: 0}, 900, function(){
            $(this).hide();
            $("#game").show().animate({left: "0px", opacity: 1}, 1000);
        });
    });

});