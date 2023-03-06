import React from 'react';
import {useState} from 'react';






const cards = (props) => {

  return (
    <div className="card-gangan text-white flex flex-col justify-between items-center w-full ">  

        <div className="bigbox bg-gray-700 flex flex-col relative w-full h-full p-2">
            <div className="smallbox1 rounded-3xl  z-auto bg-box2-100 h-1/2 w-full ">
            
            </div>
            <div className="smallbox2  rounded-3xl z-auto bg-box1-200 h-1/2 w-full">
        
            </div>
         <div className="number z-20 absolute tracking-widest text-reddish-400 text-3xl  font-bold" >
         {props.time}
         </div>
        </div>

        <div className="countBy text-white-600 ">
            <h2>{props.countBy}</h2>
        </div>

    </div>
  )
}

export default cards