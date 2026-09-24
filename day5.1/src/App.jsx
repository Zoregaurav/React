// Component unnecessary re-render? → React.memo

// Expensive calculation repeated unnecessarily? → useMemo

//react ne function ko optimized kiya hain...

import { useMemo, useState } from "react";
import Sum from "./Sum";
// import Prime from "./Prime";


function App() {
  const [count, setCount] = useState(1000);
  const [num, setNum] = useState(10000);

  console.log("App render");

  
  // function calculatePrimeNumber() {
  //   let totalPrime = 0;

  //   if (num > 1) totalPrime++;

  //   for (let i = 3; i <= num; i++) {
  //     totalPrime++;
  //     for (let j = 2; j < i; j++) {
  //       if (i % j == 0) {
  //         totalPrime--;
  //         break;
  //       }
  //     }
  //   }
  //   return totalPrime;
  // }

//  const prime=calculatePrimeNumber();

//hevy cal ko bachata hain ....Avoid recalculating expensive value
const prime=useMemo(()=>{
    let totalPrime = 0;

    if (num > 1)
     totalPrime++;

    for (let i = 3; i <= num; i++) {
      totalPrime++;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          totalPrime--;
          break;
        }
      }
    }
    return totalPrime;
  },[num]);


  return (
    <>
      <h1>Counter is:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Number is : {num}</h1>
      <button onClick={() => setNum(num + 1)}>Increment Number</button>
      <h3>Total Prime number: {prime}</h3>
      {/* <Prime primeNumber={num}></Prime> */}
      <Sum num={count} />
    </>
  );
}

export default App;
