define([], function () {

  function getDictionary(word, language){
    var language = "en_US";
    var url = "http://thesaurus.altervista.org/thesaurus/v1?word=" + word + "&language="+ language +"&output=json&key=GVZJAsXChykI5W8TZFfg";

    var object = {};
    var synonymArray =[];
    $.getJSON(url, function(data) {
      object = data;
      for (var i=0; i< object.response.length; i++){
        if (object.response[i].list.synonyms.includes("|")) {

          synonymArray = synonymArray.concat(object.response[i].list.synonyms.split("|"));
        } else {
          synonymArray.push(object.response[i].list.synonyms);
        }



      }
      alert(synonymArray);
    });
  }
});
