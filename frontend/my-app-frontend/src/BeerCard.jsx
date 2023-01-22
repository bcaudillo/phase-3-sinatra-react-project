import React, {useState} from 'react';
import { baseUrl, headers } from './Globals';
import {Form} from "semantic-ui-react";
import AddBeer from './AddBeer';


function BeerCard({beer,onChangeCart, onDeleteBeer}){
    // const [brands, setBrands]=useState("")
    // const [names, setNames]=useState("")
    // const [styles, setStyles]=useState("")
    // const [ibu, setIbu]=useState("")
    // const [abv, setAbv]=useState("")
    // const params ={brands,names,styles,ibu,abv}

    const params = {item_name: beer.names, quantity: beer.quantity, beer_id: beer.id}


    

    function handleAdd(){
        fetch(baseUrl + `/cart`,{
            method: "POST",
            headers,
            body: JSON.stringify(params)
        })
        .then(r=>r.json())
        .then((cart)=>onChangeCart(cart))
    }
    function handleDelete(){
        fetch(baseUrl + `/beerlist/${beer.id}`,{
          method: "DELETE"
        })
        .then(r=>r.json())
        .then((beer)=>onDeleteBeer(beer))
      }

    return(
        <div>
            <h4 key={beer.id}>{beer.names}</h4>
            
                <ul>
                    <li>{beer.brands}</li>
                    <li>{beer.styles}</li>
                    <li>{beer.ibu}</li>
                    <li>{beer.abv}</li>
           
                <button onClick={handleAdd}>Add to cart</button>
                <br></br>
                <button onClick={handleDelete}>Delete</button>
                
                </ul>
            <hr />
        </div>
       

    )
}

export default BeerCard