/**
 * Created by juliandm on 10.12.16.
 */

define(["plugins/jquery.mark"], function (markjs) {

  var SEARCH_IS_ACTIVE = false;

  var highlightText = function () {
    var text = $("#searchField").val();
    console.log(text);
    if(text !== "" && text.length > 0){
      $("#viewer").unmark().mark(text, {
        "element": "span",
        "className": "highlight"
      });
    } else {
      $("#viewer").unmark();
    }
  };

  $("#submitButton").on("click", function () {
    highlightText()
  });

  $("#searchField").on("keydown", function (e) {
    if(e.which === 13 ) {
      highlightText()
    }
  });
});
