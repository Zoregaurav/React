import Customer from "./Customer"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink } from "react-router";
import Dsa from "./Dsa";
import Genai from "./Genai";
import Devops from "./Devops";
import Course from "./Course";
import Question from "./Question";
import Page from "./Page";
import Practice from "./Practice";


//first thought:

// function App(){

//    const [page, setPage] = useState("Home");
 
//   return(
//     <>
//     <button onClick={()=>setPage("Home")} >Home</button>
//     <button onClick={()=>setPage("About")}>About</button>
//     <button onClick={()=>setPage("Contact")}>Contact</button>
//     <button onClick={()=>setPage("Customer")}>Customer</button>
//     {
//       page=="Home"&&<Home></Home>
//     }
//     {
//       page=="About"&&<About></About>
//     }
//     {
//       page=="Contact"&&<Contact></Contact>
//     }
//     {
//       page=="Customer"&&<Customer></Customer>
//     }
//     </>
//   )
// }

// problem ->in this code we cannot share things easily....





//2 nd approach

// function App(){
   
//   const path = window.location.pathname;

//   if(path=="/")
//     return <Home></Home>
  
//   if(path=="/Contact")
//     return <Contact></Contact>

//   if(path=="/About")
//     return <About></About>


//   if(path=="/Customer")
//     return <Customer></Customer>
// }





// function App(){

//    const path = window.location.pathname;


// pura page refresh karta hain anchor tag....

//   return(
//     <>
//     <a href="/">Home</a>
//     <a href="/About">About</a>
//     <a href="/Contact">Contact</a>
//     <a href="/Customer">Customer</a>
//     {path=="/"&&<Home></Home>}
//     {path=="/About"&&<About></About>}
//     {path=="/Customer"&&<Customer></Customer>}
//     {path=="/Contact"&&<Contact></Contact>}
//     </>
//   )
// }




// No-Refresh of page:

// function App(){
   
//   const [path,setPath] = useState(window.location.pathname);
//   const [count,setCount] = useState(0);
  
  
//   function goToHome(){
//     window.history.pushState({},"","/");
//     setPath("/");
//   }

//   function goToContact(){
//     window.history.pushState({},"","/Contact");
//     setPath("/Contact")
//   }

//   function goToAbout(){
//     window.history.pushState({},"","/About");
//     setPath("/About")
//   }

//   function goToCustomer(){
//     window.history.pushState({},"","/Customer");
//     setPath("/Customer")
//   }

//   return(
//     <>
//     <button onClick={goToHome}>Home</button>
//     <button onClick={goToAbout}>About</button>
//     <button onClick={goToCustomer}>Customer</button>
//     <button onClick={goToContact}>Contact</button>
//     {path=="/"&&<Home count={count} setCount={setCount}></Home>}
//     {path=="/About"&&<About></About>}
//     {path=="/Customer"&&<Customer></Customer>}
//     {path=="/Contact"&&<Contact></Contact>}
//     </>
//   )
// }


// but ham upar whala code ham real life mein  nahi likhenege for react-router 


// final implementation of react router:

function App(){

    return(
        <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Customer">Customer</NavLink>
            <NavLink to="/practice/12332">3 sum</NavLink>
            <NavLink to="/practice/32713">LCS</NavLink>
            <NavLink to="/practice/18920">2ACS</NavLink>
        </nav>

        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Customer" element={<Customer></Customer>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            {/* <Route path="/Course/devops"  element={<Devops></Devops>}></Route>
            <Route path="/course/dsa" element={<Dsa></Dsa>}></Route>
            <Route path="/course/genai"element={<Genai></Genai>}></Route>  */}
            <Route path="/course" element={<Course></Course>}>
              <Route index element={<Page></Page>}></Route>
              <Route path="devops" element={<Devops></Devops>}></Route>
              <Route path="dsa" element={<Dsa></Dsa>}></Route>
              <Route path="genai" element={<Genai></Genai>}></Route>
              <Route path="*" element={<h1>Page not found</h1>}></Route>
            </Route>

            <Route path="/practice" element={<Practice></Practice>}></Route>
            <Route path="/practice/:id" element={<Question></Question>}></Route>
             
            
            </Routes>  
        </>
    )
}

export default App;