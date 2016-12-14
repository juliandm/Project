define(["exports"], function (exports) {



$( window ).resize(function() {
createGrid(1)
});

  function createLineElement(x, y, length, angle) {
      var line = document.createElement("div");
      var styles = 'border: 1px solid grey; '
                 + 'width: ' + length + 'px; '
                 + 'height: 0px; '
                 + '-moz-transform: rotate(' + angle + 'rad); '
                 + '-webkit-transform: rotate(' + angle + 'rad); '
                 + '-o-transform: rotate(' + angle + 'rad); '
                 + '-ms-transform: rotate(' + angle + 'rad); '
                 + 'position: absolute; '
                 + 'top: ' + y + 'px; '
                 + 'left: ' + x + 'px; ';
      line.setAttribute('style', styles);
      return line;
  }

  function createHorizontalLines(length, distance) {
      var line = document.createElement("div");
      var styles = 'border: 1px solid grey; '
                 + 'width: ' + length + 'px; '
                 + 'height: 0px; '
                 + 'position: absolute; '
                 + 'top: ' + distance + 'px; '
      line.setAttribute('style', styles);
      return line;
  }

     function createVerticalLines(length, distance) {
      var line = document.createElement("div");
      var styles = 'border: 1px solid grey; '
                 + 'height: ' + length + 'px; '
                 + 'width: 0px; '
                 + 'left: 50%; '
                 + 'margin-left:'+ distance + 'px; '
                 + 'position: absolute; '
      line.setAttribute('style', styles);
      return line;
  }

  // function createLine(x1, y1, x2, y2) {
  //     var a = x1 - x2,
  //         b = y1 - y2,
  //         c = Math.sqrt(a * a + b * b);
  //
  //     var sx = (x1 + x2) / 2,
  //         sy = (y1 + y2) / 2;
  //
  //     var x = sx - c / 2,
  //         y = sy;
  //
  //     var alpha = Math.PI - Math.atan2(-b, a);
  //
  //     return createLineElement(x, y, c, alpha);
  // }

  $("#checkGrid").change(function() {
      if(this.checked) {
         createGrid(20)
      }
  });

  function clearGrid () {
    $("#gridContainer >  div").not(".page").remove();
  };

  var SideLength = 20

  function createGrid (zoom) {

    SideLength = (SideLength * zoom).toFixed(2);
    SideLength = Math.ceil(SideLength * 10) / 10;

    clearGrid();
    var height = $("#viewer").height();
    var width = $("#viewer").width()-2;


    var verticalMax = Math.ceil(width/SideLength/2);
    for (let i=-verticalMax; i<= verticalMax; i++) {
      $("#gridContainer").append(createVerticalLines(height, i* SideLength));
    }

    var max = Math.floor(height / SideLength);
    for (let i= 0; i<= max; i++){
     $("#gridContainer").append(createHorizontalLines(width, i* SideLength));
    }
  }



exports.createGrid = createGrid;

});
