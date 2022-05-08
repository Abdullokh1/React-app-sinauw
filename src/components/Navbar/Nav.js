import React from "react";
import NavItems from './NavItems'
import './nav.css'
let navItems = ['Home', 'Courses', 'Webinar', 'Pricing']

const Nav = ()=>{
  return (
    <>
     <header className="p-4">
      <div className="container">
        <div className="d-flex align-items-center">
          <div>
           <a href="#"><img className="nav-logo" src="headerImgs/header-logo.svg"></img></a> 
          </div>
          <ul className="d-flex nav-list m-0 p-0 list-unstyled">
            {navItems.map((nav, i) =>{
              return <NavItems key={i} itemName={nav}/>
            })}
          </ul>

            <button className="globe-btn p-1">
              <i className='bx bx-globe'></i>
            </button>

            <select className="lang-select me-4" name="language" id="language">
              <option className="country-option" value="eng">English</option>
              <option className="country-option" value="eng">Russian</option>
              <option className="country-option" value="eng">Spanish</option>
            </select>

            <button className="login-btn">Login</button>
         </div>
      </div>
     </header>

    </>
  )
}

export default Nav;