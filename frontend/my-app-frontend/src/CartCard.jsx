import React,{useState} from "react"
import {baseUrl, headers} from "./Globals"

function CartCard({carts, onChangeCart, onDeleteCartItem, onUpdateCart}){
    const params = {id: carts.id, item_name: carts.item_name, quantity: carts.quantity}
  

    function handleDelete(){
        fetch(baseUrl + `/cart/${carts.id}}`,{
          method: "DELETE"
        })
        .then(r=>r.json())
        .then((cart)=> onDeleteCartItem(cart))
        // onDeleteCartItem(cart
        //   )
      }
    const q = 0
    function onAdd(){
        params.quantity++
        fetch(baseUrl + `/cart/${carts.id}`,{
          method: "PATCH",
          headers,
          body: JSON.stringify(params)
        })
        .then((carts)=>onUpdateCart(carts))
      
      }
      function onSubtract(){
        params.quantity--
        fetch(baseUrl + `/cart/${carts.id}`,{
          method: "PATCH",
          headers,
          body: JSON.stringify(params)
        })
        .then(r=>r.json())
        .then((carts)=>onUpdateCart(carts))
        
      }
    
    
    return(
        <div>
            <h4 key = {carts.id}>{carts.item_name}</h4>
            <p>
              <b>Quantity: </b> 
              {carts.quantity}
              <br></br>
              <b> Brand: </b>
              {carts.beer.brands}
              <br></br>
              <b>ABV:</b>
              {carts.beer.abv}
              <br></br>
              <b>Style:</b>
              {carts.beer.styles}
            </p>
            <button onClick={onAdd}>+</button>
            <button onClick={onSubtract}>-</button>
            <br></br>
            <button onClick={handleDelete}>  🗑Delete</button>

            <hr/>
        </div>

    )

}

export default CartCard;