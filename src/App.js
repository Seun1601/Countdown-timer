import { useEffect, useState } from "react";
import Cards from "./cards";
import Footer from "./footer";
import timer from "./timer";

const defaultTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00"
}

function App() {
  
  
  

  return (
    <div className="App min-w-screen min-h-screen flex flex-col  items-center justify-between p-24 font-redHat bg-cover bg-center" >
      <div className="text">
          <h2 className="text-white text-3xl text-white-600">WE'RE LAUNCHING SOON</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 w-screen px-5  h-60 mb-16 p-2">
      <Timer 
      countdownStop = {1800108000000}/>
      <Cards time={defaultTime.days} countBy={"DAYS"}/>
      <Cards time={defaultTime.hours} countBy={"HOURS"}/>
      <Cards time={defaultTime.minutes} countBy={"MINUTES"}/>
      <Cards time={defaultTime.seconds} countBy={"SECONDS"}/>
      </div>
      
      <Footer />
    </div> 
  );
}

export default App;
 