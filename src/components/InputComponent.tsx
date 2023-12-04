// InputComponent.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const InputComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");

  const handleAddTodo = () => {
    dispatch(addTodo({ task: `${task1} - ${task2}` }));
    setTask1("");
    setTask2("");
  };

  return (
    <div
      className="border border-primary rounded col-sm-4 col-md-7 col-lg-6 d-flex flex-rows justify-content-center align-items-center gap-2 m-lg-auto m-md-auto m-sm-0">
      <div
        className="col-sm-7 col-md-9 col-lg-10 d-flex flex-column p-2 rounded gap-1">
        <input
          type="text"
          className="form-control"
          placeholder="Masukkan Judul"
          value={task1}
          onChange={(e) => setTask1(e.target.value)}
        />
        <input
          type="text"
          className="form-control" // Added Bootstrap class for styling
          placeholder="Masukkan Deskripsi"
          value={task2}
          onChange={(e) => setTask2(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={handleAddTodo}
      >
        +
      </button>
    </div>
  );
};

export default InputComponent;
