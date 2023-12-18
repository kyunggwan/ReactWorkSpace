import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input
        type="button"
        value="remove func"
        onClick={function () {
          setFuncShow((prev) => !prev);
        }}
      />
      <input
        type="button"
        value="remove class"
        onClick={function () {
          setClassShow((prev) => !prev);
        }}
      />
      {funcShow ? <FuncComp initNumber={3}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={3}></ClassComp> : null}
    </div>
  );
}

var funcStyle = "color:blue";
var funcId = 0;
function FuncComp(props) {
  var [number, setNumber] = useState(props.initNumber);
  var [date, setDate] = useState(new Date().toString());

  useEffect(function () {
    console.log(
      "%cfunc => useEffect (componentDidMount)" + ++funcId,
      funcStyle
    );
    document.title = number;
    return function () {
      console.log(
        "%cfunc => useEffect return (componentWillUnmount)" + ++funcId,
        funcStyle
      );
    };
  }, []);

  useEffect(function () {
    console.log(
      "%cfunc => useEffect (componentDidMount + componentDidUpdate)" + ++funcId,
      funcStyle
    );
    document.title = number + " : " + date;
    return function () {
      console.log(
        "%cfunc => useEffect return (componentWillUnmount)" + ++funcId,
        funcStyle
      );
    };
  });

  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect number(componentDidMount + componentDidUpdate)" +
          ++funcId,
        funcStyle
      );
      document.title = number;
      return function () {
        console.log(
          "%cfunc => useEffect number return (componentWillUnmount)" + ++funcId,
          funcStyle
        );
      };
    },
    [number]
  );

  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect date(componentDidMount + componentDidUpdate)" +
          ++funcId,
        funcStyle
      );
      document.title = date;
      return function () {
        console.log(
          "%cfunc => useEffect date return (componentWillUnmount)" + ++funcId,
          funcStyle
        );
      };
    },
    [date]
  );

  console.log("%cfunc => render" + ++funcId, funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input
        type="button"
        value="number"
        onClick={function () {
          setNumber(Math.random());
        }}
      />
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      />
    </div>
  );
}

var classStyle = "color:red";
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  // componentWillMount() {
  //   console.log("%cclass => componentWillMount", classStyle);
  // }
  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("%cclass => shouldComponentUpdate", classStyle);
    return true;
  }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log("%cclass => componentWillUpdate", classStyle);
  // }
  componentDidUpdate(nextProps, nextState) {
    console.log("%cclass => componentDidUpdate", classStyle);
  }
  componentWillUnmount() {
    console.log("%cclass => componentWillUnmount", classStyle);
  }
  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        />
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        />
      </div>
    );
  }
}

export default App;
