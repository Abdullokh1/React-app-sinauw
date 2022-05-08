import React from 'react'

export default function NavItems(props) {
  return (
    <li className='me-5'>
      <a className='nav-link p-0' href='#'>
        {props.itemName}
      </a>
    </li>
  )
}