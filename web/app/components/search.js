/**
 * Created by juliandm on 10.12.16.
 */

define(["plugins/jquery.mark"], function (markjs) {

  var SEARCH_IS_ACTIVE = false;

  var highlightText = function () {
    var text = $("#searchField").val();
    if(text !== ""){
      $("#viewer").unmark().mark(text, {
        "element": "span",
        "className": "highlight"
      });
    }
  };

  $("#submitButton").on("click", function () {
    highlightText()
  });
  $("#searchField").on("keydown", function (e) {
    var text = $(this).val();
    if(e.which === 13) {
      highlightText()
    } else if(e.which === 8 && text.length <= 1){
      $("#viewer").unmark()
    }
  })
  // .on("input", function () {
  //   setTimeout(highlightText, 500)
  // })


});
