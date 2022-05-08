import React from "react"
import './Hero.css'
import HeroInput from "./heroInput"
import HeroTags from "./HeroTags"

export default function  HeroSection () {
  return (
    <>
    <section className="hero-section">
      <div className="container">
        <div className="d-flex align-items-center">

          <div className="hero-img-wrapper">
            <img className="hero-img" src="HeroImgs/hero-img.png" width='700' height='670'></img>
            <img className="hero-users" src="HeroImgs/hero-users.svg"></img>
          </div>


          <div>
            <h1 className="hero-text mb-3">Grow Your Skills To Advance Your Career Path.</h1>
            <p className="hero-sub-text">We have something big for you who want to level up!</p>
            <HeroInput/>
            <HeroTags/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}