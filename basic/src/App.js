import React, { useState }from 'react';
import './App.css';
import Box from "./Box";

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (

//1. app에서 다이나믹한 값을 줄때, props를 쓴다
    // <main>
    //   <Box name="코알라" num="1"/>
    //   <Box name="지민" num="2"/>
    //   <Box name="정국" num="3"/>
    //   <Box name="뷔" num="4"/>
    // </main>

//2. state함수는 비동기적이다.
//state 함수는 count가 하나 적다.
      <>
        <div>{count}</div>
        <button onClick={increase}>증가</button>
      </>
  );
}

export default App;
