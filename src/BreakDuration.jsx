import { incrementBreakMinutes } from "./TimerLogic";
import { decrementBreakMinutes } from "./TimerLogic";
import './BreakDuration.css';
import upArrow from './assets/upBlack.png';
import downArrow from './assets/downBlack.png';


const BreakDuration = (props) => {
    const {timer, setTimer} = props;

    const handleClickUp = () => {
        setTimer(incrementBreakMinutes(timer));
    }
    const handleClickDown = () => {
        setTimer(decrementBreakMinutes(timer));
    }
    return(
        <div id="break-section">
            <h4 id="break-label" className="session-label">Break Duration</h4>
            <button onClick={() => handleClickUp()} className="buttons" id="break-increment"><img className="button-image" src={upArrow}/></button>
            <h2 id="break-length">{timer.breakMinutes}</h2>
            <button onClick={() => handleClickDown()} className="buttons" id="break-decrement"><img className="button-image" src={downArrow}/></button>
        </div>
    );
}

export default BreakDuration

