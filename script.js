// messages
var messages = ["CTIS - Web Technologies 1<br/>PROJECT<br/>Fall 2018",
    "BY<br/>Abdurahman Atakishiyev<br/>21701324",
    "<br/>Can you solve it?<br/>"];
var i = 1;

var board = [];

var empty = [0, 0];

var image;

var state = 0;

var prev = "null";

// init
$(function () {


    // Welcome screen
    $("#welcome").css("display", "block");
    $(".button").mouseenter(function () {
        $(this).css("cursor", "pointer");
    });

    // Button hover effect
    $(".button").hover(function () {
        $(this).css({ background: "#34495e", color: "black" });
    }, function () {
        $(this).css({ background: "white", color: "#34495e" });
    });

    var timer = setInterval(function () {

        $("#info p").fadeOut(500, function () {
            $(this).html(messages[i]).fadeIn(500);
            i = (i + 1) % 3;
        })

    }, 2000);

    $("#welcome > .button").click(function () {
        clearInterval(timer);
        $("#welcome").fadeOut(500, function () {
            $("#choose").fadeIn(500);
        });

    });

    // Choose screen

    $("img").click(function () {
        $("img").css('box-shadow', '0px 0px 0px');
        $(this).css('box-shadow', '0px 15px 15px #888');
        image = $(this).attr('src');
        $("#choose > .button").fadeIn(500);
    });

    $("#choose > .button").click(function () {
        $("#choose").animate({ left: "-=1000px", opacity: 0 }, 900, function () {
            $(this).hide();
            $("#game").show().animate({ left: "0px", opacity: 1 }, 1000);
            $("#shuffle").show().animate({ left: "0px", opacity: 1 }, 1000);
            buildBoard();
        });
    });

    // Game

    $("select").change(function () {
        $("#shuffle > .button").fadeIn(500);
    });

    $("#shuffle > .button").click(function () {
        if ($("select").val() !== '0')
            shuffle(Number($("select").val()))
    });

    $("#game").hover(function () {
        if (state === 1) {
            var mov = getMovables();
            $(".piece").each(function () {
                if (!mov.includes($(this).attr("id")))
                    $(this).css("opacity", "0.2");
            });
        }
    }, function () {
        if (state === 1)
            $(".piece").each(function () {
                $(this).css("opacity", "1");
            });
    });

    function getMovables() {
        var mov = [];
        $(".piece").each(function () {
            var id = $(this).attr('id');
            var coor = [Number(id[0]), Number(id[1])];
            if (Math.abs(empty[0] - coor[0]) + Math.abs(empty[1] - coor[1]) === 1)
                mov.push(id);
        });
        return mov;
    }

    function buildBoard() {
        //board = [];
        for (var i = 0; i < 3; i++) {
            $("#game").append("<div class='piece' id='0" + i + "'style='" + "background:url(" + image + ") no-repeat -0px -" + (i * 150) + "px'></div>")
            $("#game").append("<div class='piece' id='1" + i + "'style='" + "background:url(" + image + ") no-repeat -150px -" + (i * 150) + "px'></div>")
            $("#game").append("<div class='piece' id='2" + i + "'style='" + "background:url(" + image + ") no-repeat -300px -" + (i * 150) + "px'></div>")
        }
        $(".piece:first-child").css("background", "none");

        $(".piece").click(function () {
            if (state === 1) {
                var id = $(this).attr('id');
                if (getMovables().includes(id)) {
                    move(id);
                }
            }
        });
    }

    function move(id) {
        var coor = [Number(id[0]), Number(id[1])], piece = $("#" + id);
        prev = empty.join("");
        if (empty[0] - coor[0] !== 0) {
            piece.animate({ left: "-=" + 152 * (coor[0] - empty[0]) + "px" }, 300);
        }
        else if (empty[1] - coor[1] !== 0) {
            piece.animate({ top: "-=" + 152 * (coor[1] - empty[1]) + "px" }, 300);
        }
        var temp = $("#" + empty.join("")).attr('id');
        $("#" + empty.join("")).attr('id', id);
        piece.attr('id', temp);
        empty = coor;
        var mov = getMovables();
        $(".piece").each(function () {
            if (!mov.includes(piece.attr("id")))
                piece.css("opacity", "0.2");
            else
                piece.css("opacity", "1");
        });
    }

    async function shuffle(val) {
        var id;
        for (var i = 0; i < val; i++) {
            var mov = getMovables();
            do {
                id = mov[Math.floor(Math.random() * mov.length)];
            } while (id === prev);
            console.log(prev)
            move(id);
            await new Promise(done => setTimeout(() => done(), 500));
        }
        state = 1;
    }
});