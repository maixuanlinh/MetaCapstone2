import React from 'react'
import { Link } from "react-router-dom"; 
import logo from "./images/Logo.svg"
import  "./Nav.css";


export default function Nav() {
  return (
  <>
    <nav className='navContainer'>
        <ul>
        <li><Link to='/'><img src={logo} alt="logo" /></Link></li>
           <li aria-label="Link to the homepage"><Link to='/'>Home</Link></li>
           <li aria-label="Link to the about section"><a href='/'>About</a></li>
           <li aria-label="Link to the menu"><a href='/'>Menu</a></li>
           <li aria-label="Link to reservations"><Link to='/booking'>Reservations</Link></li>
           <li aria-label="Link to order online"><a href='/'>Order Online</a></li>
           <li aria-label="Link to login"><a href='/'>Login</a></li>
        </ul>
    </nav>
    </>
  )
}
