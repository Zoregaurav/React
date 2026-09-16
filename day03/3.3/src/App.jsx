//in react ham directly real dom ke andar change nahi kar sakte allowd nahi karta react 
// react bolta hain ki tu muzhe bata mein react dom ko bata deta hu react dom jake real dom ke andar change karega...

//react-->reactDom -->real dom

import { useState } from "react";


function App() {

    let [count,setCount]=useState(0);
  //    [variable,function]

   function incrementNumber(){
      count=count+1;   
    //  document.querySelector('h1').textContent=`Counter :${count}`;  //don't use this 
     setCount(count);
   }


  return (
    <>
     <h1>Counter: {count}</h1>
     <button onClick={incrementNumber}>Increment</button>
    </>
  )
}

export default App;