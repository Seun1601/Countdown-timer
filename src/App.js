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
    <div className="App min-w-screen min-h-screen flex flex-col  items-center justify-between p-24 font-redHat bg-cover bg-center" >
      <div className="text">
          <h2 className="text-white text-3xl text-white-600">WE'RE LAUNCHING SOON</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 w-screen px-5  h-60 mb-16 p-2">
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
 