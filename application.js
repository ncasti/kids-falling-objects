jQuery(document).ready(function() {

    $("#duo").draggable({
    	containment: "document",
    	axis: "x"
    });

		$(".falling-object:first").delay(800).animate({bottom: 170}, 3600);
        $(".falling-object:first").fadeOut("fast");

        $(".falling-object:eq(2)").delay(2000).animate({bottom: 170}, 3600);
        $(".falling-object:eq(2)").fadeOut("fast");

        $(".falling-object:eq(3)").delay(3600).animate({bottom: 170}, 3600);
        $(".falling-object:eq(3)").fadeOut("fast");

        $(".falling-object:last").delay(4000).animate({bottom: 170}, 3600);
        $(".falling-object:last").fadeOut("fast");

})