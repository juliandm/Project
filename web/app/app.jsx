import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute,  Link, hashHistory } from 'react-router'

import Editor from './components/Editor'
import Entrance from './components/Entrance'
import Main from "./components/Main.jsx"
import Tutorial from "./components/Tutorial"


// App css
import "applicationStyles";
// import "../viewer.html";
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Entrance}/>
      <Route path="/tutorial" component={Tutorial} />
    </Route>
    {/*<Route path="/editor" component={Editor}/>*/}
  </Router>
), document.getElementById('app'));
