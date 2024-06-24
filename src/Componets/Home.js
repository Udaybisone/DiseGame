import React from 'react'
import diceimg from './images/dice.png'

export default function Home(props) {
  return (
    <div className="home-main">
        <img src={diceimg} alt="" />
        <div className="right-part">
            <b>DISE GAME</b>
            <button className='play-btn' role='btn' onClick={()=>props.toggel()}>Play Now</button>
        </div>
    </div>
  )
}
