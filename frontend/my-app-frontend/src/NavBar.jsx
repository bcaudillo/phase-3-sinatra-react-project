import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search Inventory</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/beer">Add a Beer</Link></li>
        </ul>
    )
}
export default NavBar