import React, { useState } from "react";

function Counter() {
    
    const [number, setNumber] = useState(0);
    const Incerease = () => {
        setNumber(number+1);
        console.log("1증가")
    }
    const Decerease = () => {
        setNumber(number-1);
        console.log("1감소")
    
    }

    


    return(
        <div>
        <h1>{number}</h1>
        <button onClick={Incerease}>+1</button>
        <button onClick={Decerease}>-1</button>
        </div>




    );



}

export default Counter;