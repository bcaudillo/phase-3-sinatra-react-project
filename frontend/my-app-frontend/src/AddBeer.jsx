import React, {useState} from 'react'
import {Form} from "semantic-ui-react";
import BeerList from './BeerList';
import { headers,baseUrl } from './Globals';


function AddBeer({onAddBeer}){
    const [brands, setBrands]=useState("")
    const [names, setNames]=useState("")
    const [styles, setStyles]=useState("")
    const [ibu, setIbu]=useState("")
    const [abv, setAbv]=useState("")
    const params ={brands,names,styles,ibu,abv}

   
    function handleSubmit(e) {
        // e.preventDefault();
       
        
        fetch(baseUrl + "/addbeer",{
            method: "POST",
            headers,
            body: JSON.stringify(params)
        })
        .then(r=>r.json())
        .then(beer =>onAddBeer(beer))
    }
   
            
  
    return(
        <div>
            
            <h1>Add a beer!!</h1>
            <p>This component will <b>Create</b> a new beer to the list to be selectable</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        label="Brand:"
                        placeholder="Fat Tire"
                        name="brand"
                        value={brands}
                        onChange={ e => setBrands(e.target.value)}
          />
                    <Form.Input
                        fluid
                        label="Name:"
                        placeholder="The good stuff"
                        name="Name"
                        value={names}
                        onChange={e => setNames(e.target.value)}
                    />
                    <Form.Input
                        fluid
                        label="Type:"
                        placeholder="Lager"
                        name="Type"
                        value={styles}
                        onChange={e => setStyles(e.target.value)}
                    />
                    <Form.Input
                        fluid
                        label="IBU"
                        placeholder="70 IBU"
                        name="ibu"
                        value={ibu}
                        onChange={e => setIbu(e.target.value)}
                    />
                    <Form.Input
                        fluid
                        label="ABV"
                        placeholder="3.6%"
                        name="abv"
                        value={abv}
                        onChange={e => setAbv(e.target.value)}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
            
        </div>
    )
}


export default AddBeer