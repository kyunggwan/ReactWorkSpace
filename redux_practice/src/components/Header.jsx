import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          <a
            href="#welcome"
            onClick={function () {// 이 component에 전달된 props를 노출
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

/**
 * 리덕스 Handling 컴포넌트
 * Header 컴포넌트에 전달될 props 지정
 * connect(props, callback함수)
 * 인자 전달x, 함수 전달o
 */
export default connect(null,
  function(dispatch){
    return {
      onClick:function(){
        dispatch({type:'CHANGE_MODE', mode: 'WELCOME'})
      }
    }
  })(Header);
