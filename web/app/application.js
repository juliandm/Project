// var viewer = require("../../viewer.js");

requirejs.config({
  baseUrl : "../", //APP
  paths: {
    "pdfjs-web": "pdfjs-web",
    "pdfjs-dist": "../..",
    "pdfjs": "../../src", //src
  }
});





define(["pdfjs-web/app", "components/clickCopy", "components/search", "components/dropDown", "components/grid"], function (app, clickCopy, search, dropDown, grid) {
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


