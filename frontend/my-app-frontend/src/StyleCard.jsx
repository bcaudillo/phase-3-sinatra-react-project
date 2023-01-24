import React from "react";
import StyleCard from './'
function StyleCard({styles,onClear, onDeleteCartItem, onUpdateCart}){
    
    
    const styleCards = styles.map(item =><StyleCard key={item.id} carts={item} onDeleteCartItem ={onDeleteCartItem} onUpdateCart={onUpdateCart}/> )
  
    return(
        <div>
         
            <h1>Cart:</h1>

            <button onClick ={onClear}>Clear cart</button>
            
            {beerCards}       
           

        </div>
    
    )
}
export default Cart;
