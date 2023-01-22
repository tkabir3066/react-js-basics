import React, { useState } from "react";

const TOGGLE = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ backgroundColor: "pink", margin: "1rem", padding: "1rem" }}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, explicabo
          vel vero atque alias accusantium deleniti quia cum ut accusamus,
          quaerat, obcaecati id minima placeat. Nihil aperiam vero numquam
          quidem amet porro, est odit sapiente!
        </p>
      )}

      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default TOGGLE;
