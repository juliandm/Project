import React from "react";
// var viewer = require("../../viewer.js");
var app = require("../../app.js");

export class Entrance extends React.Component {
  hello () {

  };
  render () {
    var string = JSON.stringify(app);
    return (
      <div>
        <button className="button large button success">Hello</button>
        <p>Entrance</p>
        <p>{string}</p>
      </div>
    )
  }
}

export default Entrance;
