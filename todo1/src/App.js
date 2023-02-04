import './App.css';
import React, {useState} from 'react';
import Board from './component/Board';

 //1. 인풋창이 있고 버튼이 있다.
 //2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가 된다.
 //3. 삭제 버튼으로 삭제

function App() {

//text문을 입력 받아서 가지고 있는 useState 선언
const [InputValue, setInputValue] = useState("");
//추가 기능의 useState 선언
const [todolist, setTodolist] = useState([]);

//추가 기능
const addItem = () => {
  setTodolist([...todolist, InputValue])
}

  return (
    <div >
      <input type="text" onChange={(event)=>setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>
      <Board todolist={todolist}/>
    </div>
  );
}

export default App;
