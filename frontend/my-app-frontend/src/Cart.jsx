import React from "react";
import BeerCard from "./BeerCard";
import CartCard from "./CartCard";

function Cart({carts,onClear, onDeleteCartItem, onUpdateCart}){
    
    
    const beerCards = carts.map(item =><CartCard key={item.id} carts={item} onDeleteCartItem ={onDeleteCartItem} onUpdateCart={onUpdateCart}/> )
  
    return(
        <div>
         
            <h1>Cart:</h1>

            <button onClick ={onClear}>Clear cart</button>
            
            {beerCards}       
           

        </div>
    
    )
}
export default Cart;
