import React from "react";
import Navigation from "Navigation";

export class Main extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <Navigation/>
        <div className="row">
          <div className='large-12 columns'>
            {this.props.children}
          </div>
        </div>
      </div>


    )
  }
}

export default Main;