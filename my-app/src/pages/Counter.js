import React, {useState} from 'react';

const Counter = () => {
  //0의 기본값을 갖는 변수 = num
  //setNum = num의 세터함수, num을 세팅할 수 있다.
  //동적인 값을 관리하는 것이 useState
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  }

  const decrease = () => {
    setNum(num - 1);
  }

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  )
}

export default Counter;