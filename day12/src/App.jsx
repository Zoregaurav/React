
// import { useState } from "react";
// import { createContext } from "react";
// import {hell} from "./store";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

// // export const  Countcontext=createContext();
// // export const  Setcountcontext=createContext();
// // export const Usercontext=createContext();
// // export const Setusercontext=createContext();



// // function App(){


// //     const[count,setCount]=useState(0);
// //     const[user,setUser]=useState("Rohit");


// //     return(
// //         <>
// //       <Countcontext value={count}>
// //         <Setcountcontext value={setCount}>
// //             <Usercontext value={user}>
// //               <Setusercontext value={setUser}>
// //                  <h1>Hello coder Army:{hell}</h1>

// //                  <Header></Header>
// //               </Setusercontext>
// //             </Usercontext>
// //         </Setcountcontext>
// //       </Countcontext>
       
// //         </>
// //     )
// // }


// function App(){

//     return(
//         <>
//           <h1>Hello Ji:{hell}</h1>
//         </>
//     ) 
// } 

// export default App;


function App(){
    return(
        <>
         <h1>Welcome to coder Army</h1>
         <Header></Header>
         <Body></Body>
         <Footer></Footer>
        </>
    )
}

export default App;