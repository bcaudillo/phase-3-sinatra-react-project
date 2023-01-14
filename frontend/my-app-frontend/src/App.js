import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'
import NavBar from './NavBar'
import Search from './Search';
import About from './About';
import Cart from './Cart'
import AddBeer from './AddBeer';


function App() {
  //Edit me
  // const [spread,setSpread]=useState([])
  // useEffect(()=>{
  //     fetch("http://localhost:3000/cards")
  //     .then(r=>r.json())
  //     .then((cardsArray)=>{
  //         setCards(cardsArray);
  //     })})

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element= {<About />}/>
        <Route path="/search" element = {<Search />}></Route>
        <Route path="/cart" element = {<Cart/>}></Route>
        <Route path="/beer" element = {<AddBeer/>}></Route>
        
      </Routes>

    </Router>
  );
}

export default App;
