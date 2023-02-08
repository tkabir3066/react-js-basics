import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "./useFetch";

const DataFetch = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadingMsg = <p>Data is loading...</p>;
  const errorMsg = <p>{error}</p>;

  const todosElm =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  return (
    <div>
      <h1>Todos</h1>
      {error && errorMsg}
      {isLoading && loadingMsg}
      {todosElm}
    </div>
  );
};

export default DataFetch;
