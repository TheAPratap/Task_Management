import React, { useState } from "react";
import Api from "../API/todosApi";
import "./Style/AddTodo.css";

const AddTodo = () => {
  const initialTask = {
    id: null,
    todo: "",
  };
  const [task, setTask] = useState(initialTask);
  const [fetchData, setFetchData] = useState(false);

  const handleChange = (e) => {
    setTask({ ...task, todo: e.target.value });
    console.log("Handle change: ", task);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.create(task);
    setTask(initialTask);
    setFetchData(!fetchData);
  };
  
  return (
    <div className="add-todo">
      <h1>Create a TODO</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="todo">TODO: </label>
          <input
            type="text"
            id="todo"
            className="form-control"
            onChange={handleChange}
            value={task.todo}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Add TODO!</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
