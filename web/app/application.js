// var viewer = require("../../viewer.js");

requirejs.config({
  baseUrl : "../", //APP
  paths: {
    "pdfjs-web": "pdfjs-web",
    "pdfjs-dist": "../..",
    "pdfjs": "../../src" //src
  }
});


// require(["jquery"], function ($) {
//   $("#viewer").html("Hello World");
//   console.log("Hello");
//   // alert("Hallo");
//
// });


require(["pdfjs-web/app", ], function (app) {
  function getViewerConfiguration() {
  return {
    appContainer: document.body,
    mainContainer:  document.getElementById('viewerContainer'),
    viewerContainer: document.getElementById('viewer'),
    eventBus: null, // using global event bus with DOM events
  }
  }

  var config = getViewerConfiguration();
  app.PDFViewerApplication.run(config);

  // document.addEventListener('DOMContentLoaded', webViewerLoad, true);

});


