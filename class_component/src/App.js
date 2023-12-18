import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={3}></FuncComp>
      <ClassComp initNumber={3}></ClassComp>
    </div>
  )
}

function FuncComp(props) {
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {props.initNumber}</p>
    </div>
  );
}

/*
    Functional Component에서는 아래 처럼 state의 값을 변경할 수 없었음
    단순히 props를 받아서 표시    
*/
class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber
  }
  render(){
    return (
    <div className="container">
      <h2>class style component</h2>
      <p>Number : {this.state.number}</p>
      <input type="button" value="random" onClick={function(){
          this.setState({number:Math.random()})
      }.bind(this)}/>
    </div>
    );
  }
}

export default App;
