// messages
var messages = ["CTIS - Web Technologies 1<br/>PROJECT<br/>Fall 2018", 
                "BY<br/>Abdurahman Atakishiyev<br/>21701324", 
                "<br/>Can you solve it?<br/>"];
var i = 1;

// init
$(function(){

    $(".button").mouseenter(function(){
        $(this).css("cursor", "pointer");
    });

    var timer = setInterval(function() {
        
        $("#info p").fadeOut(500, function() {
            $(this).html(messages[i]).fadeIn(500);
            i = (i+1)%3;
        })

    }, 2000);

});