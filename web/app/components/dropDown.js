define(["foundation"], function (f) {

  var ANIMATING = false;
  var FIXED = false;
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
  .click(function () {
    var display = $("#dropdown").css("display");
    if (display === "block" && FIXED && !ANIMATING) {
      animateToggle();
      FIXED = !FIXED;
    } else if (display === "block" && !FIXED && !ANIMATING) {
      FIXED = !FIXED;
    } else if (display !== "block" && !FIXED && !ANIMATING) {
      animateToggle();
      FIXED = !FIXED;
    }

  });
  $("#viewer").mouseenter(function () {
    var display = $("#dropdown").css("display");
    if (display === "block" && !FIXED) {
      animateToggle()
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
