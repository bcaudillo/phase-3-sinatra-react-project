import React from "react";
import StyleCard from "./StyleCard";

function BeerStyles({styles}){    
    
    const styleCards = styles.map(item =><StyleCard key={item.id} carts={item} onDeleteCartItem ={onDeleteCartItem} onUpdateCart={onUpdateCart}/> )
  
    return(
        <div>
         
            <h1>Beer Styles:</h1>

            {/* <button onClick ={onClear}>Choose a favorite</button> */}
            
            {styleCards}       
           

        </div>
    
    )
}
ß


export default BeerStyles