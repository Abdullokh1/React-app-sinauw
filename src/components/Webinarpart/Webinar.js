import React from "react";
import WebinarVideos from "./WebinarVideos";
import './Webinar.css'
export default function Webinar(){
  return (
    <>
      <section className="webinar-section">
      <div className="class-title-wrapper ">
         <h2 className="class-title">Live Online Webinar</h2>
         <p className="class-text">You can stream Webinar live on our apps. Stay update on our Webinar, it’s Free!</p>
       </div>

       <div className="container">
         <WebinarVideos/>
       </div>

 
      </section>
    </>
  )
}