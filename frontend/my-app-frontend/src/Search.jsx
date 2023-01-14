import {state,useState} from "react";


function Search({cards, setSpread,isTarotCard}){
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
            <h1>Search our product!</h1>
            <p> The goal for this componenet is to display all the cards that match the search  material and give the client an oppurtunity to add this item to their cart</p>
            <form className="searchbar" onChange={handleChange}>
                <input
                    type="text"
                    id="search"
                    placeholder="search for card"
                    value={searchTerm}
                    onChange={(event)=>{handleChange(event)}}
                />
            </form>
            {/* <CardsList cards={cardsToDisplay}  handleRemoveSpread={handleRemoveSpread} isTarotCard={isTarotCard}/> */}

        </div>
        
    )
}

export default Search; 