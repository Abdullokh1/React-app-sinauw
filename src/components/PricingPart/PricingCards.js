import React from "react";
import './PricingCard.css'
const priceCard = [
  {
    img: 'PricingImgs/Price-img-1.svg',
    type: 'Free',
    price: '0$',
    info: [
      'Free e-book for every class',
      'Materials update every day',
      'Free download material videos',
      'Unlock up to 5 material videos',
     ],
    purchase: 'Your Current Package'
  },

  {
    img: 'PricingImgs/Price-img-2.svg',
    type: 'Express',
    price: '75$',
    info: [
      'Free e-book for every class',
      'Materials update every day',
      'Free download material videos',
      'Meeting 2 times a week',
      'Unlock up to 15 material videos',
     ],
    purchase: 'Buy Express'

  },

  {
    img: 'PricingImgs/Price-img-3.svg',
    type: 'Premium',
    price: '115$',
    info: [
     'Free e-book for every class',
     'Materials update every day',
     'Free download material videos',
     'Private chat with mentor',
     'Meeting 3 times a week',
     'Unlock up to 30 material videos',
    ],
    purchase: 'Buy Premium'

  },

]

export default function PriceCards(){
  return (
    <>
     <ul className="m-0 d-flex justify-content-center p-0 list-unstyled">
       {priceCard.map((item,i) =>{
         return (
           <>
            <li key={i} className=" price-items">
              <div className="d-flex">
                <img src={item.img}></img>
                 <div className="ps-4">
                   <p className="m-0 price-type">{item.type}</p>
                   <p className="m-0 price-info">{item.price} <span className="price-plan">/monthly</span></p>
                   <button className="price-btn">{item.purchase}</button>
                 </div>
              </div>
             <p className="mt-5">
               {item.info.map(el =>{
                 return <span className="plan-info">{el} <br></br></span>
               })}
             </p>

            </li>
           </>
         )
       })}
     </ul>
    </>
  )
}