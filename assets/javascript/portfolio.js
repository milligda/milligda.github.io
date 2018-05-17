$(".portfolio-image").on("mouseenter mouseleave touchstart", function(e) {
    if(e.type == 'touchstart') {
        $(this).off('mouseenter mouseleave');
    }

    $(this).toggleClass("tile-hover");
});

$(".portfolio-image").on("touchleave", function(e) {
    $(this).toggleClass("tile-hover");
});