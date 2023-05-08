import React, { useState, useEffect } from "react";
import Api from "../API/todosApi";
import "./Style/GetTodo.css";

const GetTodo = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTodo = async () => {
    try {
      const response = await Api.getAll();
      setTasks(response.data);
      console.log("Fetched data.");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div>
      {tasks.map((task, index) => (
        <div className="task" key={index}>
          <div style={{ flex: 20 }}>{task.todo}</div>
        </div>
      ))}
    </div>
  );
};

export default GetTodo;