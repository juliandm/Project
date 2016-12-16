define(["exports"], function (exports) {

  var ANIMATING = false;
  var FIXED = false;
  var PREVIOUS_FIXED = false;
  var PREVIOUS_FREE = false;




  function animateToggleDropdown() {

      ANIMATING = true;
      $("#dropdown").animate({
        height: "toggle",
      },500,"easeInOutCubic", function () {
        ANIMATING = false;
      })

  };



  //mouseenter
  $("#toggleDropdown").mouseenter(function () {
        console.log("toggledropdown")
    var display = $("#dropdown").css("display");
    if (display !== "block" && !FIXED && !ANIMATING) {
      animateToggleDropdown()
    }
  })
  .on("click dblclick",function () {
    if(!$("#toggleDropdown").hasClass("fixedToggleButton")) {
      $("#toggleDropdown").addClass("fixedToggleButton");
    } else {
      $("#toggleDropdown").removeClass("fixedToggleButton");
    }

    var display = $("#dropdown").css("display");
    if (display === "block" && FIXED && !ANIMATING) {
      PREVIOUS_FIXED = true;
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
  $("#dropdown").mouseleave(function () {
    console.log("dropdown")
    var display = $("#dropdown").css("display");
    if(!FIXED && !PREVIOUS_FIXED) {
      if (display === "block") {
        animateToggleDropdown()
      }
    } else {
      PREVIOUS_FIXED = false;
    }
  });
  $("#viewerContainer").click(function () {
    if($("#toggleDropdown").hasClass("fixedToggleButton")) {
      $("#toggleDropdown").removeClass("fixedToggleButton");
    }
    var display = $("#dropdown").css("display");
    if (display === "block" && FIXED && !ANIMATING) {
      animateToggleDropdown()
      FIXED = !FIXED;
    }
  });

  $("body").mouseleave(function () {
        console.log("window")
    var display = $("#dropdown").css("display");

      if (display === "block" && !ANIMATING) {
        animateToggleDropdown()
      }

  })



});
