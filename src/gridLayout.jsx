import React, { useState } from "react";

export default function GridLayout() {
  const[counter, setConter]=useState(0)
  const addConter=()=>{
    setConter(prevCount=> prevCount+1 )
  }
  const matrix = [
    [1, 2, 3, 4, 5, 6,7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6,7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6,7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6,7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6,7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6,7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6,7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6,7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6,7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
  ];
  return (
    <div className="bg-blue-500 grid grid-cols-10 grid-rows-10 gap-.5">
      <div className="col-span-10 text-center">Find the Secret Color! </div>
      {matrix.map((arr,i) => 
      arr.map((element, j) => 
        <div onClick={addConter} className="col-span-1 bg-gray-400 border h-10 text-white" id={`${i}-${j}`}>{i} {j}</div>
      ))}
      <div className="col-span-10 text-center text-white text-4xl border-b-4 border-white">clicks: {counter}</div>

    </div>
  );
}
