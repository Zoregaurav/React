import { useState } from "react";
import "./App.css";
import Sum from "./sum.jsx";

function App() {
  const [count, setCount] = useState(0);

  // const increment=()=>setCount(count+1);
  // props={
  //   num:0,
  //   cd:"Rohit"
  // } 

  return (
    <>
      <h1>Counter is :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <Sum num={count}></Sum>
    </>
  );
}


export default App;
