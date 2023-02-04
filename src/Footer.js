import React from 'react'
import footerlogo from "./images/footerlogo-extra.png"
import './Footer.css'
import { Link } from "react-router-dom"; 

export default function Footer() {
  return (
    <>
    <div className='footercontainer'> 
    <div> 
    <img id='footer-logo' src={footerlogo} width="150" alt="footer logo"/>
    </div>
    <div className='ulstyle'> 
    <h1 className='section-name'>Doormat Navigation</h1>
        <ul>
           <li aria-label="Link to the homepage"><Link to='/'>Home</Link></li>
           <li aria-label="Link to the about section"><a href='/'>About</a></li>
           <li aria-label="Link to the menu"><a href='/'>Menu</a></li>
           <li aria-label="Link to reservations"><Link to='/booking'>Reservations</Link></li>
           <li aria-label="Link to order online"><a href='/'>Order Online</a></li>
           <li aria-label="Link to login"><a href='/'>Login</a></li>
        </ul>
     </div>
     <div className='ulstyle'> 
        <h1 className='section-name'>Contact</h1>
         <ul>
           <li><a href='/'>Address</a></li>
           <li><a href='/'>Email</a></li>
           <li><a href='/'>Phone Number</a></li>
        </ul>
      </div>
      <div className='ulstyle'> 
        <h1 className='section-name'>Social Media Links</h1>
        <ul>
           <li><a aria-label="Link to Instagram" href='/'>Instagram</a></li>
           <li><a aria-label="Link to Facebook" href='/'>Facebook</a></li>
           <li><a aria-label="Link to Twitter" href='/'>Twitter</a></li>
        </ul>
        </div>
      </div>
          </> 
  )
}
