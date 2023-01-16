import {useState} from "react";
import {beers} from "./App"
import BeerList from "./BeerList";


function Search({beers}){
    const [searchTerm, setSearchTerm] = useState("");

   
   
    // function handleRemoveSpread(id) {
    //     const newSpread = cards.filter((card) => card.id !== id);
    //     setSpread(newSpread);
    //   }
    //   console.log(cards)




    // const cardsToDisplay = cards.filter((card)=>card.name.toLowerCase().includes(searchTerm.toLowerCase()));

    function handleChange(event) {
        setSearchTerm(event.target.value);
      }
    return(
        <div>
            <div>
                <h1>Search our product!</h1>
                <p> The goal for this componenet is to display all the cards that match the search  material and give the client an oppurtunity to add this item to their cart</p>
                <p>This will be the <b>Read</b> and <b>Delete</b> portion of the application </p>
                <h2>Possible features:</h2>
                <ul>
                    <li>A dropdown menu that you can click for filtering what you'd like to see</li>
                    <li>Buttons to see all for type</li>
                    <li>Delete button</li>
                    <li>Add to cart button</li>
                </ul>
            </div>
            <div>
                <form className="searchbar" onChange={handleChange}>
                    <input
                        type="text"
                        id="search"
                        placeholder="search for beer by name"
                        value={searchTerm}
                        onChange={(event)=>{handleChange(event)}}
                    />
                </form>
                <BeerList beers={beers}/>
            </div>
            
            {/* <CardsList cards={cardsToDisplay}  handleRemoveSpread={handleRemoveSpread} isTarotCard={isTarotCard}/> */}

        </div>
        
    )
}

export default Search; 