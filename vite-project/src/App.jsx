// import { useState, useEffect } from "react";
// import "./index.css";
// function App() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const handleStartStop = () => {
//     setIsRunning(!isRunning);
//   };

//   const handleReset = () => {
//     setTime(0);
//     setIsRunning(false);
//   };

//   const formatTime = () => {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = time % 60;
//     return `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
//       seconds < 10 ? "0" + seconds : seconds
//     }`;
//   };

//   return (
//     <div className="stopWatch">
//       <h1>Stopwatch</h1>
//       <div>{formatTime()}</div>
//       <div className="butons">
//         <button onClick={handleStartStop}>
//           {isRunning ? "Stop" : "Start"}
//         </button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
function App() {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple"];
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().trim().includes(filterValue.toLowerCase().trim())
  );

  return (
    <div>
      <h2>Filter Exercise</h2>
      <input
        type="text"
        placeholder="Search..."
        value={filterValue}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
