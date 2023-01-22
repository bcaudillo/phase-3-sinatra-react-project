import React, {useState, useEffect} from 'react';
import BeerCard from "./BeerCard";
import { baseUrl } from './Globals';



function BeerList({beers, onChangeCart, onDeleteBeer}){
    
    const beerCards = beers.map(beer =><BeerCard key={beer.id} beer = {beer} onChangeCart={onChangeCart} onDeleteBeer={onDeleteBeer}/>)
    return(
        <div>
            <h1>BeerList:</h1>
            {beerCards}
        </div>
    )
}

export default BeerList