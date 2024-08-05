import React from 'react'
import './RollDise.css'

export default function RollDise(props) {

  return (
    <div className="container">
        <div>
            <img src={require(`./images/dice_${props.img_no}.png`)}
            onClick={props.roldice} alt="" />
        </div>
        <p>Click on Dise To roll</p>
    </div>
  )
}
