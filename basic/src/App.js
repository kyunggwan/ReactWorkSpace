import React from 'react';
import './App.css';
import Box from "./Box";

function App() {
  return (

//app에서 다이나믹한 값을 줄때, props를 쓴다
    <main>
      <Box name="코알라" num="1"/>
      <Box name="지민" num="2"/>
      <Box name="정국" num="3"/>
      <Box name="뷔" num="4"/>
    </main>
  );
}

export default App;
