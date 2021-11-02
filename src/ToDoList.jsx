import React, { useState, useEffect } from "react";
import axios from "axios";

const ToDoList = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseToDos = res.data;
      setTodos(responseToDos);
    });
  }, []);

  console.log(todos);

  return (
    <div>
      <h1> ToDoList </h1>
      {todos &&
        todos.map((todo) => {
          const { id, userId, title } = todo;
          return (
            <div key={id}>
              <h5> {title} </h5>
              <h6> Assigned to user: {userId} </h6>
            </div>
          );
        })}
    </div>
  );
};

export default ToDoList;
