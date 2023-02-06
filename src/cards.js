import React from 'react'

const cards = (props) => {
  return (
    <div className="card-gangan text-white flex flex-col justify-between items-center w-32 h-32">  

        <div className="bigbox bg-black w-full h-full flex flex-col relative">
            <div className="smallbox1   w-full h-1/2 z-auto ">
            
            </div>
            <div className="smallbox2  w-full h-1/2 z-auto bg-lime-500">
        
            </div>
         <div className="number z-20 absolute top-1/2 " >
          {props.time}
         </div>
        </div>

        <div className="countBy .justify-self-baseline">
            <h2>{props.countBy}</h2>
        </div>

    </div>
  )
}

export default cards