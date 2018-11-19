(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

/**
   * Based on the CSS-Tricks article:
   * Slide In (as you scroll down) Boxes
   * https://css-tricks.com/slide-in-as-you-scroll-down-boxes/
   *
   * @author Chris Coyier
   */

var win = $(window);
var allMods = $(".portfolio-item-container");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
})

win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});


// variables for navigation
var section = 1;
var totalSections = 3;

// page section locations
var section1 = $("#section-1").offset().top;
var section2 = $("#section-2").offset().top;
var section3 = $("#section-3").offset().top + 200;

// navigation button click
$("#up").on("click", function(event) {
  // if we are not at the top section, decrease the section counter
  if (section !== 1) {
    section--
  }

  // scroll down to the section
  $("body, html").animate({
    scrollTop: eval('section' + section)
  });
});

$("#down").on("click", function(event) {
  // if we are not at the bottom section, increase the section counter
  if (section !== totalSections) {
    section++
  }

  // scroll down to the section
  $("body, html").animate({
    scrollTop: eval('section' + section)
  });
});

// track the user's location on the page and determine the section and direction
$(document).ready(function() {
  $(window).scroll(function() {
    var scrollLocation = $(document).scrollTop();
   
    if (scrollLocation < section2) {
      section = 1;
      $("#up").addClass("disabled");
    } else if (scrollLocation > section3 - 200) {
      section = 3;
      $("#down").addClass("disabled");
    } else {
      section = 2;
      $(".nav-icon").removeClass("disabled");
    }
  });
});
