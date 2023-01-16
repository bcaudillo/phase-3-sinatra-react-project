import React, {useState, useEffect} from 'react';
import BeerCard from "./BeerCard";



function BeerList({beers}){

    const [searchTerm, setSearchTerm] = useState("");
    
       
       
   

    const beerCards = beers.map(beer =><BeerCard key={beer.id} beer = {beer}/>)
    function handleChange(event) {
        setSearchTerm(event.target.value);
        }

    return(
        <div>
            <h1>BeerList:</h1>
            {/* <form className="searchbar" onChange={handleChange}>
                    <input
                        type="text"
                        id="search"
                        placeholder="search for beer by name"
                        value={searchTerm}
                        onChange={(event)=>{handleChange(event)}}
                    />
                </form> */}
            {beerCards}
        </div>
    )
}

export default BeerList