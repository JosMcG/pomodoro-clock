
export default class PomClock {
  breakMinutes = 5;
  workMinutes = 25; 
  minutes = 25;
  seconds = 0;
  runTimer = false;
  working = true;
}

export const incrementBreakMinutes = (timer) => {
  if (timer.breakMinutes < 60) {
    return {...timer, breakMinutes: timer.breakMinutes + 1};    
  } else {
    return timer;
  }
}

export const decrementBreakMinutes = (timer) => {
  if (timer.breakMinutes > 1) {
    return {...timer, breakMinutes: timer.breakMinutes - 1}; 
  } else {
    return timer;
  }  
}

export const incrementWorkMinutes = (timer) => {
  if (timer.workMinutes < 60) {
    return {...timer, workMinutes: timer.workMinutes + 1, minutes: timer.minutes + 1};    
  } else {
    return timer;
  }
}

export const decrementWorkMinutes = (timer) => {
  if (timer.workMinutes > 1) {
    return {...timer, workMinutes: timer.workMinutes - 1, minutes: timer.minutes - 1};    
  } else {
    return timer;
  }
}

export const toggleRunTimer = (timer => {
  return {...timer, runTimer: !timer.runTimer};
})

export const resetTimer = (timer => {
  return {...timer, runTimer: false, breakMinutes: 5, workMinutes: 25, minutes: 25, seconds: 0, working: true};
})


export const decrementTime = ((timer, sound) => {
    if(timer.seconds == 0){
      if(timer.minutes != 0){
        timer.seconds = 59;
        timer.minutes = timer.minutes - 1;
      }
      else {
        timer.working = !timer.working;
        sound.play();
        if(!timer.working) {
          timer.minutes = timer.breakMinutes;   
        } else if(timer.working){
          timer.minutes = timer.workMinutes;
        }
      }
    }
    else {
      timer.seconds -= 1;
    }
  return timer;      
})

export const displayTime = (timer => {
  var displaySeconds = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;
  var displayMinutes = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
  return displayMinutes +  ":" + displaySeconds;
})

