import React from "react";
import './Footer.css'
import FooterLists from "./FooterLists";

export default function Footer(){
  return (
    <>
     <footer className="p-2">
       <div className="container">
         <div className="d-flex">
           <div className="col-2 footer-left">
             <div className="mb-3">
               <a href="#"><img className="nav-logo" src="headerImgs/header-logo.svg"></img></a> 
             </div>

             <p className="footer-text">Any feedback or questions?Contact us on our social media</p>
             <ul className="m-0 p-0 d-flex list-unstyled">
               <li className="me-3">
                 <a href="#"><i className='bx footer-icon bxl-facebook' ></i></a>
               </li>
               <li className="me-3">
                 <a href="#"><i className='bx footer-icon bxl-twitter' ></i></a>
               </li>
               <li>
                 <a href="#"><i className='bx footer-icon bxl-instagram' ></i></a>
               </li>
             </ul>
           </div>
 
           <FooterLists/>
          </div>

          <p className="text-center footer-copy">Copyright 2021 Sinauw. All Rights Reserved.</p>
        </div>
     </footer>
    
    
    </>

  )
}