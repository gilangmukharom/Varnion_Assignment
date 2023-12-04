// InputComponent.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const InputComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleAddTodo = () => {
    if (task1.trim() === "" || task2.trim() === "") {
      setError("Silahkan isi judul dan deskripsinya!");
      return;
    }

    // Reset error state
    setError(null);

    // Add todo
    dispatch(addTodo({ task: `${task1} - ${task2}` }));
    setTask1("");
    setTask2("");
  };

  return (
    <div
      className="custom-input border-custom rounded col-lg-6 d-flex flex-rows justify-content-evenly align-items-center my-5 mx-auto p-1">
      <div
        className="custom-input col-lg-10 d-flex flex-column p-3 rounded gap-3">
        <input
          type="text"
          className="border-custom bg-dark text-white rounded p-2"
          placeholder="Masukan Judul"
          value={task1}
          onChange={(e) => setTask1(e.target.value)}
          required
        />
        <input
          type="text"
          className="border-custom bg-dark text-white rounded p-2"
          placeholder="Masukan Deskripsi"
          value={task2}
          onChange={(e) => setTask2(e.target.value)}
          required
        />
        {error && <div className="text-danger">{error}</div>}
      </div>
      <button
        className="btn btn-custom-1"
        onClick={handleAddTodo}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default InputComponent;
