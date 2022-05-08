import React from "react";

const footerItem = [
  {
    links: [
      'Menu',
      'Home',
      'Courses',
      'Webinar',
    ]
  },
  {
    links: [
      'Services',
      'Materials Update',
      'Trusted Mentor',
      'Free E-book',
      'Meeting',
    ]
  },
  {
    links: [
      'Further Information',
      'Terms & Conditions',
      'Privacy Policy',
    ]
  },
  {
    links: [
      'Apps Download',
      'Google Play Store',
      'App Store',
    ]
  },

]



export default function FooterLists(){
  return (
    <>
     <ul className="mb-5 d-flex justify-content-between w-100  p-0 list-unstyled">
         
        {footerItem.map((item, i) =>{
          return (
            <>
             <li>
               {item.links.map(el =>{
                 return <a className="footer-links" href="#">{el} <br></br></a>
               })}
             </li>
            
            
            </>
          )
        })}

    


     </ul>
    
    </>

  )
}