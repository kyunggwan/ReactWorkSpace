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

class ClassComp extends React.Component{
  render(){
    return (
    <div className="container">
      <h2>class style component</h2>
      <p>Number : {this.props.initNumber}</p>
    </div>
    );
  }
}

export default App;
