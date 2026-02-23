import React, { useState, useRef } from "react";

export default function GridLayout() {
  const randomRef = useRef(Math.floor(Math.random() * 100) + 1)
  console.log(randomRef.current);
  
  const [counter, setConter] = useState(0);

 

  const addConter = (e) => {
    console.log(e.target.id);
    console.log(randomRef.current);
    
    if(e.target.id === "true"){
      e.target.classList.add("bg-black")
    }
    else{e.target.textContent="X"}
    console.log(e.target.classList);
    setConter((prevCount) => prevCount + 1);
  };

  const matrix = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
  ];

  return (
    <div className="bg-blue-500 grid grid-cols-10 grid-rows-10 gap-.5 pl-10 pr-10">
      <div className="col-span-10 text-center">Find the Secret Color! </div>
      {matrix.map((arr, i) =>
        arr.map((element, j) => ( 
          <div
            onClick={addConter}
            className="col-span-1 bg-gray-400 border h-10 text-white text-center  cursor-pointer"
            id={element == randomRef.current ? "true" : `${element}`}
          >
            {" "}
            {element}
          </div>
        )),
      )}

     
      <div className="col-span-10 text-center text-white text-4xl border-b-4 border-gray">
        clicks: {counter}
      </div>
    </div>
  );
}
