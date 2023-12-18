import { useEffect } from "react";
import { useState } from "react";
export default function App2() {
  const [state, setState] = useState(0);

  console.log("state : " + state);

  useEffect(() => {
    setState(1);
    return () => {
      console.log("state : " + state);
    };
  }, [state]);

  return <div className="App2">App2</div>;
}
