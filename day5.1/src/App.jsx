import { useState } from "react";
import  Sum from "./Sum";


function App(){

      const [count,setCount]=useState(1000);
      const [num,setNum]=useState(10000);

      console.log("App render");


      function calculatePrimeNumber(){
        let totalPrime=0;
         if()
      }


      return(
        <>
        <h1>Counter is:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Number is : {num}</h1>
        <button onClick={()=>setNum(num+1)}>Increment Number</button>
        <Sum num={count}/>
        </>
      )
}

export default App;

