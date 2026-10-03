import { useState } from "react";


function Counter({name}){
    const[count,setCount]=useState(0);

    return(

        <div>
        <h1>Counter : {name}</h1>
        <h1>Counter is:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default Counter;

