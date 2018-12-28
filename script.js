// messages
var messages = ["CTIS - Web Technologies 1<br/>PROJECT<br/>Fall 2018", 
                "BY<br/>Abdurahman Atakishiyev<br/>21701324", 
                "<br/>Can you solve it?<br/>"];
var i = 1;

// init
$(function(){


    // Welcome screen
    $("#welcome").css("display", "block");
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
            buildBoard();
        });
    });

    function buildBoard(){
        board = [];
        for(var i = 0 ; i < 3; i++){
            $("#game").append("<div class='piece' id='0"+i+"'style='"+"background:url(img/1.jpg) no-repeat -0px -"+(i*150)+"px'></div>")
            $("#game").append("<div class='piece' id='1"+i+"'style='"+"background:url(img/1.jpg) no-repeat -150px -"+(i*150)+"px'></div>")
            $("#game").append("<div class='piece' id='2"+i+"'style='"+"background:url(img/1.jpg) no-repeat -300px -"+(i*150)+"px'></div>")
        }
        //document.write("<div style='width:150px;height:150px;background:url(img/1.jpg) no-repeat 0px 0px'></div>")
        console.log(board);
    }


});