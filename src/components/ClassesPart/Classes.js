import React from "react";
import './Classes.css'
import ClassItems from "./ClassItems";

export default function ClassSection(){
  return (
    <>
     <section className="class-section mb-5">
       <div className="class-title-wrapper mb-5">
         <h2 className="class-title">What Do You Want to Learn?</h2>
         <p className="class-text">Choose the right class as you need. Then enjoy studying.</p>
       </div>
       <div className="container">
        <ClassItems/>
       </div>

       <div className='show-class-wrapper'>
         <button className="class-btn">Show All Classes</button>
      </div>
     </section>
    </>
  )
}