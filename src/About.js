import React from 'react'
import restaurant from "./images/restaurant.jpg"
import chef from "./images/chef.jpg"
import './About.css'

export default function About() {
  return (
    <>
    <div className='aboutcontainer'>
    <div className='about-text'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, et omnis voluptates beatae corrupti adipisci eum porro? Adipisci nemo unde, reprehenderit labore nesciunt.</p>
    </div>
    <div className='about-img'>
        <img className='image1' src={restaurant}  alt="restaurant" />
        <img className='image2' src={chef}  alt="chef" />
    </div>
    </div>
    </>
  )
}
