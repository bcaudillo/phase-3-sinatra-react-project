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
import BeerList from './BeerList';
import { baseUrl } from './Globals';


function App() {
  //Edit me
  const [beers,setBeers]=useState([])
  const [carts, setCarts]=useState([])

  

  useEffect(()=>{
    fetch(baseUrl + "/beerlist")
    .then(r=>r.json())
    .then(beers => setBeers(beers));
    }


    ,[])
    useEffect(()=>{
      fetch(baseUrl + "/cart")
      .then(r=>r.json())
      .then(carts => setCarts(carts));
      }
      ,[])
  

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element= {<About />}/>
        <Route path="/beerlist" element = {<BeerList beers ={beers} setBeers={setBeers}/>}></Route>
        <Route path="/cart" element = {<Cart carts={carts}/>}></Route>
        <Route path="/addbeer" element = {<AddBeer />}></Route>
        
      </Routes>

    </Router>
  );
}

export default App;
