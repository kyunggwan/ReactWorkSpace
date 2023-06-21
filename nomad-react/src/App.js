import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("i run all the time");

  // component 생성되는 처음 한번
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  // keyword가 변할때만 작동
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for ", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        placeholder="search here..."
        onChange={onChange}
        value={keyword}
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click!!!</button>
    </div>
  );
}

export default App;
