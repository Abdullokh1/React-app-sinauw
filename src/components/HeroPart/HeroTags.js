import React from "react";
import './HeroTags.css'

const heroTags = ['UI UX Design', 'CSS Fundamental', '3D Design Illustration', 'Website Development','Logo Design','Icon Design']

export default function HeroTags(){

  return (
    <>
      <p className="hero-tag-title mt-5">Suggestions</p>
      
      <ul className="m-0 d-flex flex-wrap p-0 list-unstyled">
        {heroTags.map((item, i) =>{
          return <li key={i} className="hero-tag-item"><a className="hero-tag-link" href="#">{item}</a></li>
        })}
      </ul>

    </>
  )
}