import {useState} from 'react'
import './App.css'
import BreakDuration from './BreakDuration'
import WorkDuration from './WorkDuration'
import Timer from './Timer'
import PomClock from './TimerLogic'
import { displayTime } from './TimerLogic'
import tomato from './assets/tomato.png';

function App() {
  const [timer, setTimer] = useState(new PomClock());
  const [showTime, setShowTime] = useState (displayTime(timer));

  return (
    <>
      <div id="header">
        <h1>P<img src={tomato}/>modoro Clock</h1>
      </div>
      <div id="container">
        <div id="break-display">
          <BreakDuration id="break-label" timer={timer} setTimer={setTimer} showTime={showTime} setShowTime={setShowTime}/>
        </div>
        <div id="work-display">
          <WorkDuration id="work-label" timer={timer} setTimer={setTimer} showTime={showTime} setShowTime={setShowTime}/>
        </div>
        <div id="timer-display">
          <Timer id="timer-label" timer={timer} setTimer={setTimer} showTime={showTime} setShowTime={setShowTime}/>
        </div>
      </div>    
    </>
  )
}

export default App
