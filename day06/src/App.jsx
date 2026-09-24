import { useState } from "react";


function App() {

  const [time, setTime] = useState(0);
  const [intervalId,setInterval]=useState(null);
 

  function handleStart() {

   const intId=setInterval(() => {
      setTime(time=>time + 1);   // value bhej sakte hain and function bhi bhej sakte hain
    }, 1000);
   
    setInterval(intId);
  }


   
  function handleStop(){
     clearInterval(intervalId);
  }
 

  return (
    <>
      <h1>StopWatch:{time}</h1>
      <div>
        <button onClick={handleStart()}>Start</button>
        <button onClick={handleStop()}>Stop</button>
        <button>Reset</button>
      </div>
    </>
  );
}

export default App;
