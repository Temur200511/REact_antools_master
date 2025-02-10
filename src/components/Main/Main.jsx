import React from 'react'
import './main.css'
import Input from '../Input/input';
import imgss from "../../assets/icons/medsos.png";
import backimg from "../../assets/images/Illustration.png"


function Main() {
  return (
    <div className='main-section'>
        <div className='main-section-left'>
            <h1>Awesome tools for
            Designer & Developer <span>.</span></h1>
            <p>
            Antool is a web collection of information on paid or free Design and Development tools
            </p>
            <Input />
            <img className='svgss' src={imgss} alt="" />
        </div>
        <img className='main-section-right' src={backimg} alt="" />

    </div>
  )
}

export default Main;