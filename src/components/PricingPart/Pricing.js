import React from "react";
import PriceCards from "./PricingCards";


export default function Pricing(){
  return (
    <>
    <section className="pricing-section">

        <div className="class-title-wrapper mb-5">
          <h2 className="class-title">Course Pricing</h2>
          <p className="class-text">Choose pricing that suits to your need.</p>
        </div>

        <div className="container">
          <PriceCards/>
        </div>

    </section>
    
    </>

  )
}