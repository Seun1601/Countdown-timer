import { useEffect, useState } from "react";
import Cards from "./cards";
import Footer from "./footer";
function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const targetDate = new Date(2023, 2, 15, 2, 20, 10);

useEffect(() => {
  setCurrentDate(new Date());
}, [currentDate])

  return (
    <div className="App min-w-screen min-h-screen flex flex-col justify-around items-center" >
      <div className="text">
          <h2 className="text-white text-3xl">WE'RE LAUNCHING SOON</h2>
      </div>
      <div className="flex w-screen h-20 justify-around flex-wrap ">
      <Cards time={currentDate.getSeconds()} countBy={"DAYS"}/>
      <Cards time={currentDate.getMinutes()} countBy={"HOURS"}/>
      <Cards time={currentDate.getHours()} countBy={"MINUTES"}/>
      <Cards time={currentDate.getSeconds()} countBy={"SECONDS"}/>
      </div>
      
      <Footer />
    </div> 
  );
}

export default App;
 