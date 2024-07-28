import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
        <Link to="/Home">
            <button className='Home'>主页</button>
        </Link>
        
        <Link to="/Person">
            <button className='Person'>个人</button>
        </Link>
        
    </div>
  )
}

export default Footer