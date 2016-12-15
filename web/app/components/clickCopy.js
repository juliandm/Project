define([], function () {

  var getSelected = function(){
    var t = '';
    if(window.getSelection){
      t = window.getSelection();
    }else if(document.getSelection){
      t = document.getSelection();
    }else if(document.selection){
      t = document.selection.createRange().text;
    }
    return t;
  };

  $(document).ready(function(){
    $("#viewer").on("mouseup", function (e) {
      var x = getSelected();

      var CHECKSTATE = $("#checkSelect").is(":checked");
      if (CHECKSTATE) {
          if (x != "") {
          alert("You selected: " + x)
        }
      }
    });
  });

});
