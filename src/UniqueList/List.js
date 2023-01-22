import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
  { id: uuidv4(), title: "todos1", des: "this is description 1" },
  { id: uuidv4(), title: "todos2", des: "this is description 2" },
  { id: uuidv4(), title: "todos3", des: "this is description 3" },
  { id: uuidv4(), title: "todos4", des: "this is description 4" },
  { id: uuidv4(), title: "todos5", des: "this is description 5" },
  { id: uuidv4(), title: "todos6", des: "this is description 6" },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        const { id, title, des } = todo;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{des}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
