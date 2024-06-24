import React,{useState} from 'react'

export default function Page2(props) {
   const numarry = [1,2,3,4,5,6];
  return (
    <div className="container">
        <div className="nav">
            <div className="total-score">
                <b>{props.Score}</b>
                <p>Total score</p>
            </div>
            
            <div className="num-text">
                {(props.isNumSelected)?<p className='Not-selected'>You Have Not Selected Any Number</p>:null}
            <div className="nums">
                {
                  numarry.map((value,i)=>(
                     <div className={`numbox ${((props.SelectedNum)===value)?'selected' : ''}`} key={i}
                     onClick={()=>{
                        props.setSelectedNum(value)
                     }}
                     >
                     {value}
                     </div>
                  ))
                }
            </div>
            <p>Select Number</p>
            </div>
        </div>

        <div className="main-dice">
        </div>
    </div>
  )
}
