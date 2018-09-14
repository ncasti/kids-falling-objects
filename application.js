jQuery(document).ready(function() {

    $("#duo").draggable({
    	containment: "document",
    	axis: "x"
    });

        $(".falling-object").delay(800).animate({bottom: 170}, 3600);
        $(".falling-object").fadeOut("fast");

        $("p").text("Orange");

})