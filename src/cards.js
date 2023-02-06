import React from 'react'

const cards = (props) => {
  return (
    <div className="card-gangan text-white flex flex-col justify-between items-center w-1/6 bg-green-500 ">  

        <div className="bigbox bg-black w-full h-full flex flex-col ">
            <div className="smallbox1  bg-purple-800 w-full h-1/2">
                
            </div>
            <div className="smallbox2 bg-purple-400 w-full h-1/2">
        
            </div>
        </div>
         <div className="number .z-20">
          {props.time}
         </div>

        <div className="countBy .justify-self-baseline">
            <h2>{props.countBy}</h2>
        </div>

    </div>
  )
}

export default cards