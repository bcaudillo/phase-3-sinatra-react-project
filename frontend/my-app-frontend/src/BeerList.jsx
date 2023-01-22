import React, {useState, useEffect} from 'react';
import BeerCard from "./BeerCard";
import { baseUrl } from './Globals';



function BeerList({beers, onAddToCart, onDeleteBeerItem, onUpdateCart}){
    
    const beerCards = beers.map(beer =><BeerCard key={beer.id} beer = {beer} onAddToCart={onAddToCart} onDeleteBeerItem={onDeleteBeerItem} onUpdateCart={onUpdateCart}/>)
    return(
        <div>
            <h1>BeerList:</h1>
            {beerCards}
        </div>
    )
}

export default BeerList