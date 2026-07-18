import { useEffect, useState } from "react";
import "./interview.css";

function Timer({

  isRunning = true,

  onTimeUp,

}) {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    if (!isRunning) return;

    const interval = setInterval(() => {

      setSeconds((prev) => prev + 1);

    }, 1000);

    return () => clearInterval(interval);

  }, [isRunning]);

  useEffect(() => {

    if (seconds !== 0 && seconds % 300 === 0) {

      if (onTimeUp) {

        onTimeUp();

      }

    }

  }, [seconds, onTimeUp]);

  const formatTime = () => {

    const hrs = Math.floor(seconds / 3600);

    const mins = Math.floor((seconds % 3600) / 60);

    const secs = seconds % 60;

    return [

      hrs.toString().padStart(2, "0"),

      mins.toString().padStart(2, "0"),

      secs.toString().padStart(2, "0"),

    ].join(":");

  };

  return (

    <div className="timer-card">

      <div className="timer-header">

        <h2>

          ⏱ Interview Timer

        </h2>

        <span className="timer-live">

          LIVE

        </span>

      </div>

      <div className="timer-value">

        {formatTime()}

      </div>

      <div className="timer-status">

        {isRunning
          ? "Interview Running"
          : "Interview Paused"}

      </div>

    </div>

  );

}

export default Timer;