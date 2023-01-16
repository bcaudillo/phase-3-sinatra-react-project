import React, {useState} from 'react';
import { baseUrl } from './Globals';


function BeerCard({beer, setBeers}){
    const [currentBeer, setCurrentBeer] = useState("")
    const [currentCart, setCurrentCart] = useState([])

    function handleDelete(){
        fetch(baseUrl + `/beerlist/${beer.id}`,{
          method: "DELETE"
        })
        .then(r=>r.json())
        .then(beer=setCurrentBeer(beer))
    
      }

    function handleAdd(){
        fetch(baseUrl + `/beerlist/${beer.id}`,{
            method: "PATCH"
        })
        .then(r => r.json())
        .then(cart => setCurrentCart(cart))
    
    }
    return(
        <div>
            <h4 key={beer.id}>{beer.names}</h4>
            
                <ul>
                    <li>{beer.brands}</li>
                    <li>{beer.styles}</li>
                    <li>{beer.ibu}</li>
                    <li>{beer.abv}</li>
           
                <button onClick={handleDelete}>  🗑Delete</button>
                <button onClick={console.log('yay')}>Add to Cart</button>
                </ul>
            <hr />
        </div>
       

    )
}

export default BeerCard