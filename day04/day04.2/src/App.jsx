import { useEffect } from "react";
import { useState } from "react";


function App(){

  const [user,setUser]=useState([]);
  const [count,setCount]=useState(10);


  //dont Execute Right now....ek bar chalega useEffect
   useEffect(()=>{
    async function github() {
    const response=await fetch(`https://api.github.com/users?per_page=${count}`);
    const data=await response.json();

    setUser(data);
    console.log(data);

  }
  github();
   },[count]);


  // github function ek bar call using JS:
  // if(user.length==0)

   // Js->web api->Event Loop()
   //     

  return(
    <>
    <h1>Github User Profile:</h1>
    <input type="number" value={count} style={{fontSize:"50px",padding:"100px"}} onChange={(e)=>setCount(e.target.value)}></input>

     <div> 
      {
        user.map((u)=><img src={u.avatar_url} height={"150px"} width={"150px"}></img>)
      }
     </div>
    </>
  )
}

export default App;