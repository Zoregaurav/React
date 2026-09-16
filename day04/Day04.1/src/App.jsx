import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Sum from './sum.jsx'


function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
     <h1>Counter is :{count}</h1>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <button onClick={()=>setCount(count-1)}>Decrement</button>
     <Sum num={count}></Sum>
    </>
  )
}


export default App
