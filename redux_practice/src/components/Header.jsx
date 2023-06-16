import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          <a
            href="#weolcome"
            onClick={function () {
              this.props.onClick();
            }.bind(this)}
          >
            WEB
          </a>
        </h1>
        World Wide WEB
      </div>
    );
  }
}

export default connect(null,
  function(dispatch){
    return {
      onClick:function(){
        dispatch({type:'CHANGE_MODE', mode: 'WELCOME'})
      }
    }
  })(Header);
