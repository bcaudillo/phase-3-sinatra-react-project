import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import Search from './Search';
import About from './About';


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
    <div>
      <h1>Beer!</h1>
        <About/>

    </div>
  );
}

export default App;
