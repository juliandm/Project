define(["exports"], function (exports) {

  var iconSlider = {
    names: [],
    text: "",
    searchIcons: function (text) {
      var textArray = [];
      this.text = text;

      var that = this;


      if (text.includes(" ")){
        textArray = text.split(" ")
        textArray = textArray.filter(function (el) {
          var result = false
          if (el !== (" " || "  " || "   ") && el >= 4) {
            result = true;
          }
          return result;
        })

      }

      if (text.length >= 4 && textArray.length < 6) {
        $.getJSON("../data/icons.json").done(function(icons) {

        var iconsArray = icons.icons;

        var duplicateArray = iconsArray.filter(function (element) {

          if (textArray.length === 0) {
            // console.log("Simple", element, text);
            // console.log(element.includes(text));
            return element.includes(text);

          } else {

            var INCLUDED = false;
            textArray.forEach(function (value) {
              console.log("Array", element, value)
              console.log(element.includes(value));
              if (element.includes(value)){
                INCLUDED = true;
              }
            });
            return INCLUDED;
          }
        });

        that.names = duplicateArray.filter(function(item, pos, self) {
          return self.indexOf(item) == pos;
        });
        that.appendToCarousel();
      });
      } else if (text.length < 4) {
        $("#carousel").empty().html("<p> Marked text: '" + text + "'  too short! </p>");
      } else {
        text = text.split(" ", 5);
        text = text.join(" ");
        text = text + "...";
        $("#carousel").empty().html("<p> Marked text '" + text + "' too long! </p>");
      }




    },
    appendToCarousel: function () {
        var text = this.text.split(" ", 5);
        text = text.join(" ");
        text = text + "...";

      if(this.names.length > 0) {
        $("#carousel").empty();
        this.names.forEach(function (el) {
          $("#carousel").append( "<div class='item'> <i class='fa fa-3x "+ el +"' aria-hidden='true'></i> </div>" );
        });
        startCarousel();
      } else {
        $("#carousel").empty().html("<p> No icons for text:'" + text + "' found! </p>");
      }
    }
  };

  function grabIcon() {
     $("#slider").click(function(evt){
      var clicked = evt.target;
      var currentID = clicked.id || "No ID!";
     $(clicked).html(currentID);
    })
  }


  function animateToggleSlider (show, hide) {
    ANIMATING = true;
    var height = $("#sliderContainer").height();
    var display = "block"

    if (height > 23 && !show){
      height = 20;
      $("#sliderContainer div:first-child button").removeClass("upside fixedToggleButton");
      display = "none";

    } else if (height < 100 && !hide) {
      height = 100;
      $("#sliderContainer div:first-child button").addClass("upside fixedToggleButton");
    }


    $("#sliderContainer").animate({
      height: height,
    },500,"easeInOutCubic", function () {
      ANIMATING = false;
    })
    $(".owl-carousel").css("display", display);

  };


  $("#toggleSlider").on("click", function () {
    animateToggleSlider(false, false);
  });

  $("#viewerContainer").on("dblclick", function () {
    animateToggleSlider(false, true);
  });
   var owl = $('#carousel');
  $('#carousel').on('mousewheel', '.owl-stage', function (e) {

      if (e.deltaY>0) {
          owl.trigger('next.owl');
      } else {
          owl.trigger('prev.owl');
      }
      e.preventDefault();
  });

  function startCarousel () {

    var loop = true;
    $('#carousel').trigger('destroy.owl.carousel');
    if (iconSlider.names.length < 5) {
      loop = false;
    }

    $('#carousel').owlCarousel({
        loop: loop,
        nav: false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
  }





exports.iconSlider = iconSlider;
exports.toggleSlider = animateToggleSlider;

});
