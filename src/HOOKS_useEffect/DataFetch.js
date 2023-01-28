import React, { useEffect } from "react";
import { useState } from "react";

const loadingMsg = <p>Data is loading...</p>;
const DataFetch = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("Data fetching is not successful");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const todosElm =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMsg}
      {todosElm}
    </div>
  );
};

export default DataFetch;
