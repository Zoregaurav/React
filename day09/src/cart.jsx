import { useState } from "react";



function Cart(){

    const [foodItem,setFoodItem]=useState(["orange ","Apple ","Banana"]);
   
    
    function increment(){

        foodItem.push("Mango");
        setFoodItem([...foodItem,"mango"]);
        
    }
 

    return(
        <>
            <h1>My food Item: {foodItem}</h1>
            <ul>
                {
                    foodItem.map((food,index)=><li key={index}>{food}</li>)
                }
            </ul>
            <button onClick={increment}>Increment</button>
        </>
    )
}


export default Cart;