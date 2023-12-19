import { useEffect } from "react";
import { useState } from "react";
export default function App2() {
  const [state, setState] = useState(0);

  console.log("state : " + state);

  useEffect(() => {
    console.log("effect : " + state);
    setState(1);
    return () => {
      console.log("return : " + state);
    };
  }, [state]);

  return <div className="App2">App2</div>;
}
