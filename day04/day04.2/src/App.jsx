// useEffect build in react hook to handle sideEffect


import { useEffect, useState } from "react";


function App(){

  const [user,setUser]=useState([]);
  const [count,setCount]=useState(10);

  //Dont execute right now execute in last.... 1 bar chalega sirf
   useEffect(()=>{
     async function github(){
   
       const response=await fetch(`https://api.github.com/users?per_page=${count}`);
       const data=await response.json();
       console.log(data);
       setUser(data);
     }

     github();
   },[count]);


  //Js:
  // if(user.length===0)
  // github();


  return(
    <>
       
      <h1>Github User Profile: </h1>
      {/* style ko object ki form mein darshana hein...is liye curly braces js ke expression ko dikhana hain toh bhi curly bracess {{}}->means js expression ke andar style object ko darshaya hein yaha...*/}
      <input type="value"value={count} style={{fontSize:"50",padding:"20px",margin:"10px"}} onChange={(e)=>setCount(e.target.value)}></input>  
      <div>
        {/* yaha ham object ko nahi likhte */}
          {
              user.map((u)=><img src={u.avatar_url} height={"150"}></img>)
          }
      </div>
    </>
  )
}

export default App;



//flow of this code :

      //         APP STARTS
      //             │
      //             ↓
      //   useState initializes
      //   user = []
      //   count = 10
      //             │
      //             ↓
      //       React renders
      //             │
      //             ↓
      //   UI shows input = 10
      //   No images yet
      //             │
      //             ↓
      //     Render completed
      //             │
      //             ↓
      //     useEffect runs
      //             │
      //             ↓
      //     github() executes
      //             │
      //             ↓
      //        fetch()
      //             │
      //             ↓
      //  GitHub API request
      //             │
      //             ↓
      //      await response
      //             │
      //             ↓
      //  response.json()
      //             │
      //             ↓
      //     setUser(data)
      //             │
      //             ↓
      //     STATE CHANGED
      //             │
      //             ↓
      //      React re-renders
      //             │
      //             ↓
      //   user contains 10 users
      //             │
      //             ↓
      //       user.map()
      //             │
      //             ↓
      //   10 <img> elements
      //             │
      //             ↓
      //     GitHub avatars
      //     appear on screen
      //             │
      //             ↓
      //  count still = 10
      //             │
      //             ↓
      //  useEffect doesn't run



//  Initial render
//      ↓
// useEffect ✓

// count changes
//      ↓
// useEffect ✓

// count changes
//      ↓
// useEffect ✓

// count changes
//      ↓
// useEffect ✓



// user changes
//      ↓
// re-render
//      ↓
// count unchanged
//      ↓
// useEffect ✗