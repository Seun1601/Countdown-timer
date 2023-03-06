import { useEffect, useState } from "react";
import Cards from "./cards";
import Footer from "./footer";
import Timer from "./timer";

const defaultTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

function App({ countdownStop }) {
  const [remainingTime, setRemainingTime] = useState(defaultTime);

  

  useEffect(() => {
    const intId = setInterval(() => {
      updateRemainingTime(countdownStop);
    }, 1000);

    return () => clearInterval(intId);
  }, [countdownStop]);

  function updateRemainingTime(countdown) {
    const difference = +new Date(countdown) - +new Date();
    if (difference > 0) {
      setRemainingTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      });
    } else {
      setRemainingTime(defaultTime);
    }
  }

  return (
    <div className="App min-w-screen min-h-screen flex flex-col items-center justify-between p-24 font-redHat bg-cover bg-center">
      <div className="text">
        <h2 className="text-white text-3xl tracking-widest text-white-600">
          WE'RE LAUNCHING SOON
        </h2>
      </div>
      
        <Timer countdownStop={1800108000000} setRemainingTime={setRemainingTime} />
        
      
      <Footer />
    </div>
  );
}

export default App;
