import './header.css'
import React from 'react'
import svg from "../../assets/icons/Group 1399.png"
function Header() {
  return (
    <header>
      <img className='svgs' src={svg} alt="" />
      <nav>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Cotegories</a>
            </li>
            <li>
                <a href="#">My Collections</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
        </ul>
      </nav>
      <div className='login'>
        <p>
        Login
        </p>
        <button>Sign in</button>
      </div> 
    </header>
  )
}

export default Header;
