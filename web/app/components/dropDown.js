define(["foundation"], function (f) {

  var ANIMATING = false;
  var FIXED = false;
  var PREVIOUS = false;

  var animateToggle = function () {
    ANIMATING = true;
    $("#dropdown").animate({
      height: "toggle",
    },500,"easeInOutCubic", function () {
      ANIMATING = false;
    })
  };

  //mouseenter
  $("#dropdown-button").mouseenter(function () {
    var display = $("#dropdown").css("display");
    if (display !== "block" && !FIXED && !ANIMATING) {
      animateToggle()
    }
  })
  .on("click dblclick",function () {
    var display = $("#dropdown").css("display");
    if (display === "block" && FIXED && !ANIMATING) {
      PREVIOUS = true;
      animateToggle();
      FIXED = !FIXED;
    } else if (display === "block" && !FIXED && !ANIMATING) {
      FIXED = !FIXED;
    } else if (display !== "block" && !FIXED) {
      FIXED = !FIXED;
      animateToggle();
    } else {
      FIXED = !FIXED;
    }

  });
  $("#viewerContainer").mouseenter(function () {
    var display = $("#dropdown").css("display");
    if(!FIXED && !PREVIOUS) {
      if (display === "block") {
        animateToggle()
      }
    } else {
      PREVIOUS = false;
    }
  })
  .click(function () {
    var display = $("#dropdown").css("display");
    if (display === "block" && FIXED && !ANIMATING) {
      animateToggle()
      FIXED = !FIXED;
    }
  })
});
