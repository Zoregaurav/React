import { CreateCartContext } from "./App";
import { useContext } from "react";

// itemadded ,
// totalPrice
    
function CartValue(){

 const {price,totalItem}=useContext(CreateCartContext);

    return(
        <>
        <h1>Total item added :{totalItem}</h1>
        <h2>Total price:{price}</h2>
        </>
    )
}

   
export default CartValue;