import React from "react"
import Editor from './components/Editor'
import Entrance from './components/Entrance'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Entrance}/>
    <Route path="/Editor" component={Editor}/>
  </Router>
), document.getElementById('app'))
