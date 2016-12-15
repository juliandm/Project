define(["exports"], function (exports) {

  var ANIMATING = false;
  var FIXED = false;
  var PREVIOUS = false;
  $("#toggleSlider").on("click", animateToggleSlider)

  function animateToggleDropdown() {
    ANIMATING = true;
    $("#dropdown").animate({
      height: "toggle",
    },500,"easeInOutCubic", function () {
      ANIMATING = false;
    })
  };

  function animateToggleSlider () {
    console.log("Click")
    ANIMATING = true;
    var height = $("#sliderContainer").height();
    if (height > 18){
      height = 18;
    } else if (height < 100) {
      height = 100;
    }
    $("#sliderContainer").animate({
      height: height,
    },500,"easeInOutCubic", function () {
      ANIMATING = false;
    })
  };

  //mouseenter
  $("#toggleDropdown").mouseenter(function () {
    var display = $("#dropdown").css("display");
    if (display !== "block" && !FIXED && !ANIMATING) {
      animateToggleDropdown()
    }
  })
  .on("click dblclick",function () {
    var display = $("#dropdown").css("display");
    if (display === "block" && FIXED && !ANIMATING) {
      PREVIOUS = true;
      animateToggleDropdown();
      FIXED = !FIXED;
    } else if (display === "block" && !FIXED && !ANIMATING) {
      FIXED = !FIXED;
    } else if (display !== "block" && !FIXED) {
      FIXED = !FIXED;
      animateToggleDropdown();
    } else {
      FIXED = !FIXED;
    }

  });
  $("#viewerContainer").mouseenter(function () {
    var display = $("#dropdown").css("display");
    if(!FIXED && !PREVIOUS) {
      if (display === "block") {
        animateToggleDropdown()
      }
    } else {
      PREVIOUS = false;
    }
  })
  .click(function () {
    var display = $("#dropdown").css("display");
    if (display === "block" && FIXED && !ANIMATING) {
      animateToggleDropdown()
      FIXED = !FIXED;
    }
  });





});
