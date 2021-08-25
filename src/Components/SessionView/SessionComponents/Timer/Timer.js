import { Fragment, useState } from "react";
import "./Timer.css";
const Timer = ({ currentItem, startSession }) => {
  const [timer, setTimer] = useState("");

  if (currentItem) {
    initializeClock(Date.now() + minutesToMilliseconds(currentItem.timer));
    return minutesToMilliseconds(currentItem.timer);
  }
  return (
    <Fragment>
      <div className="timeDisplay">{sendTime()}</div>

      <button className="startButton" onClick={startSession}>
        Start Timer
      </button>
    </Fragment>
  );
};

function getTimeRemaining(endTime) {
  const total = endTime - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60); //converts milliseconds to seconds, then gets the remainder, since we want to total seconds after minutes have already been counted
  const minutes = Math.floor((total / 1000 / 60) % 60);
  // const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  // const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    //   days,
    //   hours,
    minutes,
    seconds,
  };
}

function initializeClock(endTime) {
  function updateClock() {
    const t = getTimeRemaining(endTime);
    //console.log(t.minutes, t.seconds);
    sendTime(t.minutes, t.seconds);
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  updateClock();
  var timeInterval = setInterval(updateClock, 1000);
}

const minutesToMilliseconds = (minutes) => {
  return minutes * 60 * 1000;
};

const sendTime = (minutes, seconds) => {
  let formatTime = `${minutes}:${seconds}`;
  console.log(formatTime);
  return formatTime;
};

export default Timer;
