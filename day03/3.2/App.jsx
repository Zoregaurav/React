// privious 3.1


// html  
// app.js    <---- Slow load
     

// 3.2: 

// Bundler:Vite,webpack,parcel
//           |
//       ESmBuild(older version)
//          new version(??)



import ReactDom from "react-dom/client";

function Header(){
    return(
        <>
          <h1>Welcome to stike platform</h1>
          <h2>Here we sell courses</h2>
        </>
    )
}

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<Header/>);
