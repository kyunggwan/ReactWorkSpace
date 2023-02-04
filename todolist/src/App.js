import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';


function App() {
 
 //1. 인풋창이 있고 버튼이 있다.
 //2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가 된다.
 //3. 삭제 버튼으로 삭제

const [inputValue, setInputValue] = useState("");
const [todolist, setTodolist] = useState([]);

const addItem = () => {
  setTodolist([...todolist, inputValue]);
}

  return (
    <>
      <input value={inputValue} type ="text" onChange={(event) => setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가</button>
      <TodoBoard todolist={todolist}/>
    </>
  );
}

export default App;
