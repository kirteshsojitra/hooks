import React from "react";
import {useState} from "react";
function Hook1() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
    </div>
  );
}

export default Hook1;
