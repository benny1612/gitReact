import React, { useState, useRef } from "react";

export default function GridLayout() {
  const randomRef = useRef(Math.floor(Math.random() * 100) + 1);
  console.log(randomRef.current);

  const [counter, setConter] = useState(0);
  const [msg, setmsg] = useState();
  const realued = () =>
    setTimeout(() => {
      window.location.reload();
    }, 3500);

  const hendleClick = (e) => {
    if (e.target.id === "true") {
      setConter((prevCount) => prevCount + 1);

      setmsg(`You found the number after ${counter} tries 🤓🤓🤓🤓`);
      e.target.classList.add("bg-red-600", "hover:bg-red-500");
      const lodeing = document.getElementById("lodeing");
      lodeing.classList.remove("hidden");
      realued();

      e.target.textContent = "V";
    } else {
      if (e.target.textContent != "X") {
        setmsg("Keep Searching!");
        e.target.textContent = "X";
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
      <div className="col-span-10 text-center font-sans text-4xl">
        Find thes <span className="text-purple-700"> Secret Color 🧐!</span>
      </div>

      <div className="col-start-5 col-end-7 row-span-2 bg-red-700 text-center text-white pt-5 mt-1 text-2xl">
        {" "}
        secret color!
      </div>
      <div className="col-span-10 bg-blue-500"></div>

      {matrix.map((arr, i) =>
        arr.map((element, j) => (
          <div
            onClick={hendleClick}
            className="col-span-1 bg-gray-700 hover:bg-gray-500 border h-10 text-white text-center  cursor-pointer "
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
      
      <div className="col-span-10 row-span-2 justify-center text-yellow-300 text-4xl font-mono text-center">
        {msg}
        <div id="lodeing" className="hidden" role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-neutral-tertiary animate-spin fill-danger"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        
      </div>
    </div>
  );
}
