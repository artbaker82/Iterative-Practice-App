import { Fragment, useState, useEffect } from "react";
import Metronome from "../../../Metronome/Metronome";
import "./Timer.css";

//when timer reaches zero, go to next item, when timer is zero and queue is empty,
//display completed message
//highlight current item in list

const formatTime = (totalSeconds) => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);
  console.log(minutes, seconds);
  //change to string with leading and trailing zeros
  minutes = minutes < 1 ? "" : minutes;
  seconds = seconds === 0 ? "00" : seconds;
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
  const [sessionFinished, setSessionFinished] = useState(false);
  const [showMetronome, setShowMetronome] = useState(false);

  console.log(currentIdx, current, timer, sessionFinished);
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
    //check if there are no more items
    if (currentIdx >= queue.length) {
      setSessionFinished(true);
      setTimer("");
    } else {
      setTimer(current.timer * 60);
    }
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
      <div className="timeDisplay">
        <div className="displayCurrent">
          {current ? `Currently Practicing: ${current.title}` : "Session Finished"}
        </div>
        {/* display only seconds if minutes equals zero */}
        {formatTime(timer).minutes > 0
          ? `${formatTime(timer).minutes}:${formatTime(timer).seconds}`
          : `${formatTime(timer).seconds}`}
      </div>

      {!isRunning ? (
        <button
          disabled={sessionFinished ? true : false}
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
      {sessionFinished ? <button className="backToDash">Back To Dashboard</button> : <Fragment />}
      <button className="showMetronome" onClick={() => setShowMetronome(!showMetronome)}>
        {showMetronome ? "Hide Metronome" : "Show Metronome"}
      </button>
      {showMetronome && <Metronome />}
    </Fragment>
  );
};

export default Timer;
