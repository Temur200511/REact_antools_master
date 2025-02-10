import React from 'react'
import "./main3.css"
import Cards from "../Cards/Card"

function Main3() {
    return (
        <div className='main3'>
            <div className='main3-left'>
                <h3>Newcomer Tools</h3>
                <p>
                Wow! see the latest update of the most recommended tools from reliable designers and developers
                </p>
                <button className='button3'>Explore more</button>

            </div>
            <div className='cardss'>
                <Cards title="Zeplin" price="Free & Paid" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Cards title="PHPStorm" price="Free" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Cards title="Toolbox" price="Free" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Cards title="Procreate" price="Paid" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>
        </div>
    )
}

export default Main3