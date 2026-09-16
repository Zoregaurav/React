import { useEffect } from "react";
import { useState } from "react";


function App(){

  const[user,setUser]=useState([]);
   
  //dont Execute Right now....
   useEffect(()=>{
    async function github() {
    const response=await fetch("https://api.github.com/users");
    const data=await response.json();

    setUser(data);
    console.log(data);

  }
   },[]);



  // if(user.length==0)
  // github();

  return(
    <>
    <h1>Github User Profile:</h1>
    <input style={{fontSize:"50px",padding:"100px"}}></input>
     <div>
      {
        user.map((u)=><img src={u.avatar_url} height={"150px"} width={"150px"}></img>)
      }
     </div>
    </>
  )
}
export default App;