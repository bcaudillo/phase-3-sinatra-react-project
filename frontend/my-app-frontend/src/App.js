import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'
import NavBar from './NavBar'
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
   
    fetch(baseUrl + "/cart")
    .then(r=>r.json())
    .then(carts => setCarts(carts))
    }
    ,[])
      //take original cart and spread and add new cart to array 

  function onDeleteBeer(){
    console.log(beers)
    setBeers([...beers])
  }
  function onUpdateCart(cart){
    console.log(cart)
    console.log(carts)
    const ojbIndex = carts.findIndex((item=>item.id ==cart.id))
    carts[ojbIndex] = cart
    console.log(carts)
    setCarts([...carts])
  }
   function onChangeCart(cart){
      cart.quantity++
      console.log(cart)
   }
   function onClear(){
    setCarts([])
    fetch(baseUrl+ '/cart',{
      method: "DELETE"
    })
   }

console.log(carts)
   function onDeleteCartItem(index){
    console.log(index)
    carts.splice(index, 1)
    console.log(carts)
    setCarts([...carts])
   }
  

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element= {<About />}/>
        <Route path="/beerlist" element = {<BeerList beers ={beers} onDeleteBeer={onDeleteBeer} onChangeCart={onChangeCart}/>}></Route>
        <Route path="/cart" element = {<Cart  carts={carts} onChangeCart={onChangeCart} onDeleteCartItem={onDeleteCartItem} onUpdateCart={onUpdateCart} onClear={onClear}/>}></Route>
        <Route path="/addbeer" element = {<AddBeer />}></Route>
        
      </Routes>

    </Router>
  );

  }
export default App
