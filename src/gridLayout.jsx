import React, { useState, useRef } from "react";

export default function GridLayout() {
  const randomRef = useRef(Math.floor(Math.random() * 100) + 1);
  const colorRef = useRef(getRandomColor()).current;
  console.log(randomRef.current);
  console.log(colorRef);

  const [counter, setConter] = useState(0);
  const [msg, setmsg] = useState();
  const realued = () =>
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const hendleClick = (e) => {
    if (e.target.id === "true") {
      setConter((prevCount) => prevCount + 1);

      setmsg(`You found the number after ${counter} tries 🤓🤓🤓🤓`);
      e.target.style.backgroundColor = colorRef;
    
      realued();

      e.target.textContent = "V";
    } else {
      if (e.target.textContent != "X") {
        setmsg("Keep Searching!");
        e.target.textContent = "X";
        e.target.classList.add("bg-stone-700")
        setConter((prevCount) => prevCount + 1);
      }
    }
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
      <div className="col-span-10 text-center font-sans text-4xl ">
        find thes <span className="text-purple-700 "> Secret Color 🧐:</span>
      </div>

      <div
        style={{ backgroundColor: colorRef }}
        className={`col-start-5 col-end-7 row-span-2 text-center text-white pt-5 mt-1 text-2xl motion-preset-confetti `}
      >
        {" "}
        secret color!
      </div>
      <div className="col-span-10 bg-blue-500"></div>

      {matrix.map((arr, i) =>
        arr.map((element, j) => (
          <div
            onClick={hendleClick}
            className="col-span-1 bg-gray-500 hover:bg-gray-300 border h-10 text-white text-center  cursor-pointer "
            id={element == randomRef.current ? "true" : `${element}`}
          >
            {" "}
            {element}
          </div>
        )),
      )}

      <div className="col-span-10 text-center text-white text-4xl border-b-4 border-gray ">
        clicks: {counter}
      </div>

      <div className="col-span-10 row-span-2 justify-center text-yellow-300 text-4xl font-mono text-center">
        {msg}
    
      </div>
      <div className="text-center col-span-10 ">🤩🤩🤩🤩🤩🤩🤩</div>
    </div>
  );
}
