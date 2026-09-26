import { useState } from "react";


function App() {

  const [time, setTime] = useState(0);
  const [intervalId,setIntervalId]=useState(null);
 


  function handleStart() {

    if(intervalId!=null)
      return;
     console.log("render");

   const intId=setInterval(() => {
      setTime(time=>time + 1);   // value bhej sakte hain and function bhi bhej sakte hain
    }, 1000);
   
     setIntervalId(intId);
  }


   
  function handleStop(){
     clearInterval(intervalId);
     setIntervalId(null);
  }
 

  function handleReset(){
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  }

  return (
    <>
      <h1>StopWatch:{time}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
