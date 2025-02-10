import React from 'react'
import "./back.css"
import pns1 from "../../assets/fonts/logos_microsoft.png";
import pns2 from "../../assets/fonts/logos_google.png";
import pns3 from "../../assets/fonts/logos_slack.png";
import pns4 from "../../assets/fonts/logos_wordpress.png";

function Back() {
  return (
    <div className='backs'>
        <p>
        Trusted more than 150+ brand
        </p>
        <div className='logos'>
            <img src={pns1} alt="" />
            <img src={pns2} alt="" />
            <img src={pns3} alt="" />
            <img src={pns4} alt="" />
        </div>
    </div>
  )
}

export default Back