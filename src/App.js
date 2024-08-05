import './App.css';
import Home from './Componets/Home';
import RollDise from './Componets/RollDise';
import ShowRools from './Componets/ShowRools';
import Page2 from './Componets/page2';
import { useState } from 'react';
import './Componets/RollDise.css'
function App() {
  const [Score, setScore] = useState(0)
  const [SelectedNum, setSelectedNum] = useState(0)
  const [img_no, setimg_no] = useState(1)
  const [isgamestarted, setisgamestarted] = useState(true)
  const [isNumSelected, setisNumSelected] = useState(false)
  const [ShowRoolsHook,setShowRoolsHook] = useState(false)
  const toggelgameplay = ()=>{
    setisgamestarted((pre) => !pre);
  }


    const randomNum = (min,max)=>{
        return (Math.floor(Math.random() *(min-max)+max));
    }
    const roldice =()=>{
      if(SelectedNum===0){
        setisNumSelected(true);
      }else{
        setisNumSelected(false);
        const randomNumber = randomNum(1,7);
      setimg_no(() => randomNumber)

      if(SelectedNum===randomNumber){
        setScore((prev)=> prev + randomNumber);
      }else{
        setScore((prev) => prev - 1);
      }
      setSelectedNum(0);
      }
    }
  return (
    <>
    {
    isgamestarted ? <Home toggel={toggelgameplay}/> 
    : <>
        <Page2 SelectedNum={SelectedNum} setSelectedNum={setSelectedNum} Score={Score}
          isNumSelected={isNumSelected}  />
        <RollDise img_no={img_no} roldice={roldice}/>
        <div className="btn">
        <button className='Reset-btn' onClick={()=>setScore(0)}>Reset Score</button>
        <button className='Rool-btn' onClick={()=>{setShowRoolsHook(!ShowRoolsHook)}}>
          {ShowRoolsHook?'Hide':'Show'} Rools
          </button>
        </div>
        {ShowRoolsHook && <ShowRools/>}
        
      </>
    }
    </>
  );
}

export default App;
