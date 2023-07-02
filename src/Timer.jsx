import { useEffect, useState } from 'react'
import { toggleRunTimer, resetTimer, decrementTime, displayTime } from './TimerLogic';
import chime from './assets/startBreak.wav';
import playPause from './assets/playPause.png';
import refresh from './assets/reset.png';
import './Timer.css';


const Timer = (props) => {
    const {timer, setTimer} = props;
    const {showTime, setShowTime} = props;
    const [sound, setSound] = useState();

    function startStop() {
        setTimer(toggleRunTimer(timer));
        setSound(new Audio(chime));
        
    }

    function reset () {
        const newTimer = resetTimer(timer);
        setTimer(newTimer);
        setShowTime(displayTime(newTimer));
    }
   
    useEffect (() => {
        const interval = setInterval (() => {
            if(timer.runTimer) { 
                setTimer(decrementTime(timer, sound));
                setShowTime(displayTime(timer));
            }
        }, 1000);
        return() => clearInterval(interval);
    }, [timer]);
  
       

    return(
        <div id="timer-section">
            <div id="timer-label">
                {props.timer.working ? <h2 className="session-label">Work Session</h2> : <h2 className="session-label">Break Time</h2>}
            </div>
            <p id="time-left">{showTime}</p>
            <audio id="beep" src={sound}></audio>
            <button onClick={() => startStop()} className="buttons" id="start_stop"><img id="play-pause-image" src={playPause} alt="Start/Pause"/></button>
            <button onClick={() => reset()} className="buttons" id="reset"><img id="reset-image" src={refresh} alt="Reset"/></button>
        </div>
    );
}

export default Timer