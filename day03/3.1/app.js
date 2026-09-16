import React from "react"
import ReactDOM from "react-dom/client"



function Header(){
    return(
        <>
        <p>Here we are going to talk about strikr what courses we offer</p>
        <ul>
            <li>Web Development</li>
            <li>DSA</li>
            <li>Devops</li> 
            <li>GenAi</li>
        </ul>
        </>
    )
}


function Main(){
    return(
        <>
           <h2>Here we are all courses</h2>
        </>
    )
}


function Footer(){
    return(
        <>
           <h3>I am footer of strike platform</h3>
           
        </>
    )
}

function App(){
    return(
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
    )
}


const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);




