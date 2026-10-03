import { useState } from "react";
import Counter from "./Counter";

function App(){
  const [timer,setTimer]=useState(['first','second','third']);


  function increment(){
    setTimer(["fourth",...timer]);
  }

  return(
    <>
    <h1>This is our Counter Table:</h1>
    <button onClick={increment}>Push</button>
    <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
    {
      timer.map((value,index)=><Counter key={value} name={value}></Counter>)
    }
    {/*comapre keys with->key*/}
    {/* first->fourth
    second->first
    third->second 
    new element,key=3,count=0 */}
    </div> 
    </>
  )
}


export default App;
