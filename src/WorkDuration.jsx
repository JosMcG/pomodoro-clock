import { incrementWorkMinutes } from "./TimerLogic";
import { decrementWorkMinutes, displayTime } from "./TimerLogic";
import './WorkDuration.css'
import upArrow from './assets/upBlack.png';
import downArrow from './assets/downBlack.png';

const WorkDuration = (props) => {
    const {timer, setTimer} = props;
    const {setShowTime} = props;

    const handleClickUp = () => {
        const newTimer = incrementWorkMinutes(timer);
        setTimer(newTimer);
        setShowTime(() => displayTime(newTimer));
    }
    const handleClickDown = () => {
        const newTimer = decrementWorkMinutes(timer);
        setTimer(newTimer);
        setShowTime(displayTime(newTimer));
    }
    return(
        <div id="work-section">
            <h4 id="session-label" className="session-label">Work Duration</h4>
            <button onClick={() => handleClickUp()} className="buttons" id="session-increment"><img className="button-image" src={upArrow}/></button>
            <h2 id="session-length">{timer.workMinutes}</h2>            
            <button onClick={() => handleClickDown()} className="buttons" id="session-decrement"><img className="button-image" src={downArrow}/></button>
    </div>
    );
}

export default WorkDuration