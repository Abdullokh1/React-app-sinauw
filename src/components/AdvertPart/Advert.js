import React from "react";
import './Advert.css'

export default function Advert(){
  return (
    <>
      <section className="advert-section">
        <div className="container">
          <div className="advert-inner">
             <div className="d-flex justify-content-between">
               <div className="col-5">
                 <h3 className="advert-title mb-4">Get Our Apps, Now!</h3>
                 <p className="advert-text mb-5">Reach out our apps everywhere and everytime with Sinauw Mobile Application.</p>

                 <div className="d-flex align-items-center">
                   <a className="me-4" href="#"><img src="AdvertImgs/google.svg"></img></a>
                   <a  href="#"><img src="AdvertImgs/apple.svg"></img></a>
                 </div>
               </div>

               <div>
                 <img className="advert-img" src="AdvertImgs/app-ad.png"></img>
               </div>

             </div>
          </div>

        </div>
      </section>
    
    </>

  )
}