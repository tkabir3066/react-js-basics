import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const DummyTodos = ["todo1", "todo2"];
const HOME = () => {
  const [todos, setTodos] = useState(DummyTodos);

  const handleTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <NewTodo onTodo={handleTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default HOME;
