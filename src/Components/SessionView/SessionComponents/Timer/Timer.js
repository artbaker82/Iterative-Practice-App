import { Fragment, useState, useEffect } from "react";
import "./Timer.css";

const formatTime = (totalSeconds) => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);
  return {
    minutes,
    seconds,
  };
};

const Timer = ({ queue }) => {
  const [timer, setTimer] = useState(queue[0].timer * 60); //convert time to seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        setTimer((seconds) => seconds - 1);
      }, 1000);
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
