import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(1);
  const [name,setName] = useState('');

  const increase = () => {
    setCount(count+1);
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  useEffect(()=> {
    console.log("name 변화");
  },[name])

  //useEffect는 () 콜백함수로 받음 예시 (()=>{})
  //useEffect는 마운팅 될 때만 랜더링하고싶다면 빈 배열
  //name이 변화 될때만 랜더링하고 싶으면 배열안에 초기값
  
  return(
    <div className='App'>
        <button onClick={increase}>Update</button>
        <span>count : {count}</span>
        <input type='text' value={name} onChange={handleChange}></input>
        <span>name: {name}</span>

      
    </div>



  )

}
 export default App;