import React from 'react'
import morty from './morty.gif';

function Header() {
  return (
    <div className = "Picture">
        <img src={morty} alt="Picture" className="mainpage-image"/>
      </div>
  )
}

export default Header