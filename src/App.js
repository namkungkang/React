import { useState } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';


//onChange 입력값으 넣으면 그 값을 호출
// onChange = {(event) => console.log(event.target.value)}
// event 매개변수를 넣어서 값이 나오는지 확인

function App() {
  const [input,SetInput] = useState('');
  const [todolist,SetTodolist] = useState([]);
  const addItem = () => {
    SetTodolist([...todolist,input])

  }
    return (
    <div className="App">
      <input value={input} type='text' onChange={(event)=> SetInput(event.target.value)}></input>
      <button onClick={addItem}>추가</button>
      <TodoBoard todolist={todolist} />
      
    </div>
  );
}

export default App;