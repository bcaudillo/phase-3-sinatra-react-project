import React from 'react'


function AddBeer(){

    function handleChange(event) {
        setSearchTerm(event.target.value);
      }
    return(
        <div>
            
            <h1>Add a beer!!</h1>
            <form className="Beer Form" onChange={handleChange}>
                <input
                type="text"
                id="search"
                placeholder="search for card"
                value={searchTerm}
                onChange={(event)=>{handleChange(event)}}
                />
            </form>
        </div>
    )
}

export default AddBeer