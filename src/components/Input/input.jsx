import React from 'react'
import './input.css'
import png from "../../assets/icons/search.png"

function Input() {
  return (
    <div>
      <form>
        <img src={png} alt="" />
        <input type="text" placeholder='find more than 430+ tools...' />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Input;
