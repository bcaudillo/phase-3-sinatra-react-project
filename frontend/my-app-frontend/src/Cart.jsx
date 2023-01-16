import React from "react";
function Cart({carts}){
    
    console.log(carts)
    return(
        <div>
            <h1 >Cart!</h1>
            <p>The goal of this component is to display the items the user has added to their cart</p>
            <p>The Cart component will give the user the ability to add new items to their cart for the <b>Update</b> capability of this app</p>
            <h2>Possible features:</h2>
            <ul>
               
                <li>delete an item from the cart</li>

            </ul>
            
        </div>
    
    )
}
export default Cart;
