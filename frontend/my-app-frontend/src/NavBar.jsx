import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/beerlist">See beer list</Link></li>
            <li><Link to="/beerstyles">Cart</Link></li>
            <li><Link to="/addbeer">Add a Beer</Link></li>
        </ul>
    )
}
export default NavBar