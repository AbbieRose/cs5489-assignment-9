$(".reactions").click(function(event) {
    var reaction = $(this).attr('id');
    console.log("className: " + reaction);
    if(reaction === "cheering") {
        $(".current-reaction").empty();
        $(".current-reaction").css("background-color","lightblue");
        $(".current-reaction").append('<img src="Spurs-fan.jpg" alt="spurs fan cheering" height="300" width="500"/>')
    } else if (reaction === "whistling") {
        $(".current-reaction").empty();
        $(".current-reaction").css("background-color","red");
        $(".current-reaction").append('<img src="pitada-athletic-whistle.jpg" alt="whistling fans" height="300" width="500"/>')
    } else if (reaction === "singing") {
        $(".current-reaction").empty();
        $(".current-reaction").css("background-color","turquoise");
        $(".current-reaction").append('<img src="Spurs-fans-singing.jpg" alt="fans singing" height="300" width="500"/>')
    } else if (reaction === "groaning") {
        $(".current-reaction").empty();
        $(".current-reaction").css("background-color","darkblue");
        $(".current-reaction").append('<img src="spurs-groaning.JPG" alt="fans groaning" height="300" width="500"/>')
    } else if (reaction === "euphoria") {
        $(".current-reaction").empty();
        $(".current-reaction").css("background-color","yellow");
        $(".current-reaction").append('<img src="spurs-euphoria.jpg" alt="euphoric Pochettino" height="300" width="500"/>')
    } else if (reaction === "despair") {
        $(".current-reaction").empty();
        $(".current-reaction").css("background-color","black");
        $(".current-reaction").append('<img src="ajax-despair.jpg" alt="despairing players"height="300" width="500"/>')
    }
});

