import React from "react";
import './Stats.css'
const stats = [
  {
    name: 'Get New Friends',
    text: 'You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!',
    img: 'StatsImgs/stats-img-1.svg'
  },
  {
    name: 'Expert and Fun Mentor',
    text: 'Learn with earnest and don’t forget to get relax too. Learn and enjoy the materials or classes with our expert mentors.',
    img: 'StatsImgs/stats-img-2.svg'
  },
  {
    name: 'Flexible Access',
    text: 'You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!',
    img: 'StatsImgs/stats-img-3.svg'
  },

]

export default function Stats(){
  return (
    <>
    <section className="ps-5 stats-section">
      <div className="container">
        <ul className="m-0 p-0 d-flex justify-content-center list-unstyled">
            {stats.map((item, i ) =>{
              return (
                <>
                <li className="stats-item col-3" key={i}>{item.name} <br></br><br></br> 
                {item.text}
                <div className="stats-img-wrapper">
                  <img className="stats-img" src={item.img}></img>  
                </div>
                </li>
                </>
              ) 
            })}
        </ul>
      </div>
    </section>
    </>
  )
}