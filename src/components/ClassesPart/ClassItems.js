import React from "react";
import './ClassItems.css'
const classObj = [
  {
    img: 'ClassesImgs/class-img-1.png',
    type: 'Technology',
    title: 'Digital Marketing Strategy',
    text: 'This course aims to give you deeper understanding of core processes ...',
  },
  {
    img: 'ClassesImgs/class-img-2.png',
    type: 'Design',
    title: 'Figma Fundamental',
    text: 'These lessons and exercises will help you start designing with Figma ...',
  },
  {
    img: 'ClassesImgs/class-img-3.png',
    type: 'Coding',
    title: 'HTML Fundamental',
    text: 'Well organized and easy to make you understand tutorials with lots of ...',
  },
  {
    img: 'ClassesImgs/class-img-4.png',
    type: 'Coding',
    title: 'Android App Development',
    text: 'Take your Android coding skills to the next level, advanced Android app ...',
  },

]

export default function ClassItems (){
  return (
    <>
     <ul className=" d-flex class-list justify-content-center p-0 list-unstyled">
       {classObj.map((item, i) =>{
         return (
           <>
            <li className="class-item" key={i}>
              <div className="class-img-wrapper">
                <img className="class-img" src={item.img} width='252' height='169'></img>
              </div>
              <p className="class-type pt-4">{item.type}</p>
              <h3 className="class-title-info">{item.title}</h3>
              <p className="class-text">{item.text}</p>

              <div className="text-center">
                <button className="access-btn">Access Class</button>
              </div>
            </li>
           </>
         )
       })}

     </ul>
    
    </>
  )
}