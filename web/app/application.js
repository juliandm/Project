// var viewer = require("../../viewer.js");

requirejs.config({
  baseUrl : "../", //APP
  paths: {
    "pdfjs-web": "pdfjs-web",
    "pdfjs-dist": "../..",
    "pdfjs": "../../src", //src
  },
  // shim: {
  //     foo: {
  //         deps: ['jquery'],
  //         exports: 'Foo'
  //     },
  //     bar: {
  //         deps: ['jquery']
  //     }
  // }
});





define(["api/thesaurus", "plugins/owl.carousel", "plugins/jquery-easing", "plugins/jquery.mousewheel", "plugins/foundation",
  "pdfjs-web/app", "components/clickCopy", "components/search", "components/dropDown", "components/grid" ],
  function (api_the, owl, easing, mousewheel,foundation, app, clickCopy, search, dropDown, grid) {


    $(document).foundation();
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


