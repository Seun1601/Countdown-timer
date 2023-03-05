import React from 'react'
import { useState, useEffect } from 'react'
import App from './App'


const timer = ({countdownStop}) => {

    const [remainingTime, setRemainingTime] = useState(defaultTime);

    useEffect(() => {
      const intId = setInterval(() => {
        updateRemainingTime(countdownStop);
      }, 1000);
  
      return () => clearInterval(intId);
    }, [countdownStop]);
  
    function updateRemainingTime(ctdnstp){
        console.log("Hello");
    }

  return (
    <div></div>
  )
}

export default timer