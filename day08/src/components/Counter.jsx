import { useState } from "react";
import { CountContext } from "../App";
import { useContext } from "react";


function Counter(){
    
   const {count,setCount}= useContext(CountContext);


    return(
        <>
        <h1>Counter is: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
  
}

export default Counter;