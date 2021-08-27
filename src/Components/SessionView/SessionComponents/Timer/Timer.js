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
  const [stateQueue, setStateQueue] = useState(queue);
  console.log(stateQueue);
  //set current to first element on  first load
  useEffect(() => {
    const firstEl = stateQueue[0];

    firstEl.current = true;
    const updateCurrent = stateQueue.map((item) => {
      if (item.id === firstEl.id) {
        return firstEl;
      }
      return item;
    });
    console.log(updateCurrent);

    //setStateQueue([...stateQueue, firstEl]);
  }, []);

  useEffect(() => {
    //check if timer is at zero, if so, change current reset isrunning
    if (timer <= 0) {
      //get current item
      const prevItem = stateQueue.filter((item) => item.current)[0];
      const currentIdx = stateQueue.indexOf(prevItem);
      const updatedItem = { ...prevItem, current: false };
      console.log("previous current", updatedItem);
      const newCurrent = stateQueue[currentIdx + 1];
      console.log("new Current", newCurrent);
      //get index of current item

      //set current index to false
      // const updatedCurrent = stateQueue.map((item) => {

      //   if (item.id === current.id) {
      //     return {
      //       ...item,
      //       current: !item.current,
      //     };
      //   }
      //   return item;
      // });
      // const updatedCurrent =
      // console.log("updated current", updatedCurrent);
      // setStateQueue(updatedCurrent);
      //console.log(stateQueue);

      //setStateQueue([...stateQueue, (stateQueue[currentIdx + 1].current = true)]);
      setIsRunning(false);
      //setTimer(current.timer * 60);
    }
  }, [timer]);

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
