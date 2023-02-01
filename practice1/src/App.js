import {useState} from 'react';
import './App.css';

function App() {

  const [names, setNames] = useState(["홍길동", "김민수"]);

  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  console.log(input);

  return (
   <>
      <input type="text" value={input} onChange={handleInputChange} />
      <button>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
   
   </>
  );
}

export default App;
