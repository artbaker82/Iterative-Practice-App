import { Fragment, useState, useEffect } from "react";
import "./Timer.css";

//when timer reaches zero, go to next item, when timer is zero and queue is empty,
//display completed message
//highlight current item in list

const formatTime = (totalSeconds) => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);
  return {
    minutes,
    seconds,
  };
};

const Timer = ({ queue }) => {
  const [timer, setTimer] = useState(2); //convert time to seconds
  const [isRunning, setIsRunning] = useState(false);
  //const [stateQueue, setStateQueue] = useState(queue);
  //set initial current to first item in list
  const [current, setCurrent] = useState(queue[0]);
  const [currentIdx, setCurrentIdx] = useState(0);

  console.log(currentIdx, current, timer);
  useEffect(() => {
    //check if timer has finished, set new current, reset timer
    if (timer <= 0) {
      console.log("prev current", currentIdx, current, timer);
      //set new idx
      setCurrentIdx(currentIdx + 1);
      //set new current
      setCurrent(queue[currentIdx + 1]);

      setIsRunning(false);
    }
  }, [timer]);

  useEffect(() => {
    console.log("current changed to", current);
    setTimer(current.timer * 60);
  }, [current]);

  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        setTimer((seconds) => seconds - 1);
      }, 1000);
      //cleanup function
      return () => window.clearInterval(id);
    }
  }, [isRunning]);

  return (
    <Fragment>
      <div className="timeDisplay">{`${formatTime(timer).minutes}:${
        formatTime(timer).seconds
      }`}</div>

      {!isRunning ? (
        <button
          onClick={() => {
            setIsRunning(true);
          }}
          className="startButton"
        >
          Start Timer
        </button>
      ) : (
        <button
          onClick={() => {
            setIsRunning(false);
          }}
          className="stopButton"
        >
          Stop Timer
        </button>
      )}
    </Fragment>
  );
};

export default Timer;
