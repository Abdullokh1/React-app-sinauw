import React from "react";
import './heroInput.css'
export default function HeroInput(){
  return (
    <>
       
     <div className="hero-input-wrapper">
       <input className="hero-input" type='text' placeholder="What do you want to learn..."></input>
       <i className='bx bx-search' ></i>
     </div>

    </>
  )
}