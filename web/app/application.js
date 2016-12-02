// var viewer = require("../../viewer.js");

requirejs.config({
  paths: {
    "pdfjs-web": "Old/",
    "pdfjs-dist": "../../"
  }
});


require(["jquery"], function ($) {
  $("#viewer").html("Hello World");
  console.log("Hello");
  alert("Hallo");

});

require(["pdfjs-web/app"], function (app) {
  function getViewerConfiguration() {
  return {
    appContainer: document.body,
    mainContainer:  $("#viewerContainer"),
    viewerContainer: document.getElementById('viewer'),
    eventBus: null, // using global event bus with DOM events
  }
  }

  var config = getViewerConfiguration();
  app.run(config);
});
