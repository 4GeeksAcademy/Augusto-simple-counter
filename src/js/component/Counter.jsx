import React, { useState, useEffect } from "react";

export const Counter = ({ seconds }) => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    if (counter < 9) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-group p-3 mb-2 bg-dark text-white text-center">
      {Array(4).fill().map((_, index) => (
        <div key={index} className="card bg-dark">
          <div>{counter}</div>
        </div>
      ))}
      <div className="card bg-dark">
        <div>{seconds}</div>
      </div>
    </div>
  );
};


// export const Counter = ({ seconds }) => {
    
//     return <div className="card-group p-3 mb-2 bg-dark text-white text-center">
//         <div className="card bg-dark">
//             <div><i class='fa-thin fa-clock-nine fa-9x fa'></i></div>
//         </div>
//         <div class="card bg-dark far fa-clock">
//             <div></div>
//         </div>
//         <div className="card bg-dark">
//             <div>0</div>
//         </div>
//         <div className="card bg-dark">
//             <div>0</div>
//         </div>
//         <div className="card bg-dark">
//             <div>0</div>
//         </div>
//         <div className="card bg-dark">
//             <div>0</div>
//         </div>
//         <div className="card bg-dark">
//             <div>{seconds}</div>
//         </div>
//     </div>

// }