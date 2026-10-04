import { useStore } from "./store";
 
function Header(){

    const userName=useStore((state)=>state.user);

    return(
        <>
         <h1>I am the header</h1>
         <h3>Display the username:{userName}</h3>
          <button onClick={}>ChangeName</button>
        </>
    )
}

export default Header;