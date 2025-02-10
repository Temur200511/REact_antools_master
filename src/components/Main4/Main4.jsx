import React from 'react'
import "./main4.css";
import film1 from "../../assets/images/Group 1434.png";
import film2 from "../../assets/fonts/chevron-left.png";
import film3 from "../../assets/fonts/chevron.png";

function Main4() {
  return (
    <div className='main4'>
        <img className='main4-left' src={film2} alt="" />
        <img className='main4-img' src={film1} alt="" />
        <p className='main4-p'>
        Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
        </p>
        <img className='main4-right' src={film3} alt="" />
    </div>
  )
}

export default Main4