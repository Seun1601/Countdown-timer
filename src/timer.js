import { useState, useEffect } from "react";
import Cards from "./cards";

const defaultTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};


const Timer = ({countdownStop}) => {
  const [remainingTime, setRemainingTime] = useState(defaultTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownStop);
    }, 1000);

    return () => { 
      clearInterval(intervalId);
    };
  }, [countdownStop]);

 


  function updateRemainingTime(countdown) {
    const difference = +new Date(countdown) - +new Date();
    
    if (difference > 0) {
      setRemainingTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
        minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
        seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
        
      });
    } else {
      setRemainingTime(defaultTime);
    }
    
  }

 return(
  <div className="grid grid-cols-4 gap-4 w-screen px-5 h-60 mb-16 p-2">
        <Cards time={remainingTime.days} countBy={"DAYS"} />
        <Cards time={remainingTime.hours} countBy={"HOURS"} />
        <Cards time={remainingTime.minutes} countBy={"MINUTES"} />
        <Cards time={remainingTime.seconds} countBy={"SECONDS"} />
  </div>
 )
};

export default Timer;