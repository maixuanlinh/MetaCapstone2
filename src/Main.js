import React from 'react'
import hero from "./images/restauranfood.jpg"
import { Link } from 'react-router-dom';
import  "./Main.css";


export default function Main() {
  return (
    <div className='banner'>
     <h1>Little-Lemon</h1>
     <h2>Chicago</h2>
     <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.<br/>
     <Link to="/booking"> 
       <button id='topbtn' type='submit'>Reserve a table</button>
     </Link>
     </p>
     
     <img src={hero} width="300" alt="logo" />
    </div>
  )
}
