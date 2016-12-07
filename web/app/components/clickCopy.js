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
    $(document).on("mouseup", function () {
      var x = getSelected();
      if (x != "") {
        alert("You selected: " + x)
      }
    });
  });

});
