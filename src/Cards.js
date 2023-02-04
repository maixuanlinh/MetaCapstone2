import React from 'react'
import img1 from "./images/greeksalad.jpg"
import img2 from "./images/lemondessert.jpg"
import img3 from "./images/bruchetta.jpg"
import  './Cards.css';

export default function Cards() {
  return (
    <><div className='cardscontainer'> 
        <div className='cardsheader'> 
        <h1>This week's specials</h1>
        <button >Online Menu</button>
        </div>
        <div className='deckofcards'>
                <div className='card'>
                <img src={img1} width="300" alt="little-lemon" />
                    <div className='content'>
                    <h3>Greek salad</h3> <h3>$12</h3>
                    </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, et omnis voluptates beatae corrupti adipisci eum. </p>
                    <div className='content'>
                    <h4>Order a delivery</h4> <h4>Icon</h4>
                    </div>
                </div>

                <div className='card'>
                <img src={img3} width="300" alt="little-lemon" />
                <div className='content'>
                    <h3>Canapes</h3> <h3>$18</h3>
                    </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, et omnis voluptates beatae corrupti adipisci eum. </p>
                    <div className='content'>
                    <h4>Order a delivery</h4> <h4>Icon</h4>
                    </div>
                </div>

                <div className='card'>
                <img src={img2} width="300" alt="little-lemon" />
                <div className='content'>
                    <h3>Lemon Pie</h3> <h3>$15</h3>
                    </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, et omnis voluptates beatae corrupti adipisci eum. </p>
                    <div className='content'>
                    <h4>Order a delivery</h4> <h4>Icon</h4>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}
