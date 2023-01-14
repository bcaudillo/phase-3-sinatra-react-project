import React, {useState} from 'react'
import {Form} from "semantic-ui-react";


function AddBeer(){
    const blankState ={
        id: "",
        name: "",
        number_of_cards: "",
        spread_meaning: "",
      }
    
    const [formData, setFormData] = useState(blankState);
    
    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }

    function handleSubmit(e) {
        <h1>e.target.value</h1>
    //     e.preventDefault();
    //     const configObj={
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     }
    //     fetch("http://localhost:3000/spread",configObj)
    //       .then((r) => r.json())
    //       .then((data)=>handleAddCard(data));
    //       setFormData(blankState)
    }
  
    return(
        <div>
            
            <h1>Add a beer!!</h1>
            <p>This component will <b>Create</b> a new beer to the list to be selectable</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        label="Name:"
                        placeholder="Fat and Sassy"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
          />
                    <Form.Input
                        fluid
                        label="Type:"
                        placeholder="Lager"
                        name="Type"
                        value={formData.spread_meaning}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Cost:"
                        placeholder="$6"
                        name="Cost"
                        value={formData.number_of_cards}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid
                        label="img_url"
                        placeholder="No image"
                        name="img_url"
                        value={formData.number_of_cards}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}


export default AddBeer