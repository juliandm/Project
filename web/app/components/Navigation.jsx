import React from "react";
import { Link } from 'react-router'

export class Entrance extends React.Component {
  render () {
    return (
      <div>
        <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle></button>
          <div className="title-bar-title">Menu</div>
        </div>

        <div className="top-bar" id="navbar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li><Link to='/tutorial'>Table</Link></li>
              <li>
                <a href="javascript:;">More</a>
                <ul className="vertical menu" data-dropdown-menu>
                  <li><a href="https://github.com/reactjs/redux" target="_blank">Redux</a></li>
                  <li><a href="http://foundation.zurb.com/sites/docs/" target="_blank" >Foundation</a></li>
                </ul>
              </li>
              <li style={{width: '20px'}}></li>
              <li>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><input type="search" placeholder="Search" /></li>
              <li><button type="button" className="button">Find</button></li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default Entrance;