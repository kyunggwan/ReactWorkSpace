import { useState, useEffect } from "react";
function Hello() {
  useEffect(() => {
    console.log("created :)");
    // 이게 cleanUp function 닫힐때 실행됨
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
