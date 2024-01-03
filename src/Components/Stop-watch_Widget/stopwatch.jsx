import { useState,useEffect } from "react";
import "./stopwatch.css";

export default function Stopwatch() {
  const [time, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning && isPaused === false) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning,isPaused]);

  const start_stop = () => {
    setIsRunning(!isRunning);
    setIsPaused(false)
  };

  const reset = ()=>{
    setTimer(0);
    setIsRunning(false);
  }
  const resume_pause = () =>{
    setIsPaused(!isPaused)
  }

  const formatTime = (time)=>{
    const hours = Math.floor(time/3600);
    const min = Math.floor((time%3600)/60);
    const sec = Math.floor(time%60);
    const formatNumber = (num) => (num < 10 ? `0${num}` : num);
    return `${formatNumber(hours)} : ${formatNumber(min)} : ${formatNumber(sec)}`
  }
  return (
    <>
      <div className="progress">
        <div className="timer"><h1>{formatTime(time)}</h1></div>
      </div>

      <div className="watch-btn-wrapper">
        <button onClick={start_stop}>{!isRunning ? "Start" : "stop"}</button>
        <button onClick={reset}>Reset</button>
        <button onClick={resume_pause} disabled = {isRunning === false} >{!isPaused ? "Pause" : "Resume" }</button>
      </div>
    </>
  );
}
