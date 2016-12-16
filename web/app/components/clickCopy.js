define(["components/slider"], function (slider) {

  var getSelected = function(){
    var t = '';
    if(window.getSelection){
      t = window.getSelection();
    }else if(document.getSelection){
      t = document.getSelection();
    }else if(document.selection){
      t = document.selection.createRange().text;
    }
    t = t.toString();
    return t;
  };

  $(document).ready(function(){
    $("#viewer").on("mouseup", function (e) {
      var text = getSelected();

      var CHECKSTATE = $("#checkSelect").is(":checked");
      if (CHECKSTATE) {
          if (text != "") {
            slider.toggleSlider(true, false);
            slider.showIcons(text);
        }
      }
    });
  });

});
