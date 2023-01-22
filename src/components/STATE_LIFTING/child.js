import React from "react";
const data = "Hello I am child data";
const child = (props) => {
  props.onChildData(data);
  return (
    <div>
      <h1>Child</h1>
    </div>
  );
};

export default child;
