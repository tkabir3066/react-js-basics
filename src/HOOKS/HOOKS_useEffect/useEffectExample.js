import React from "react";
import { useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UseEffectExample;
