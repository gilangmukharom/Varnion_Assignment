import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeTodo } from "../redux/todoSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from 'react-bootstrap';
import "./style.css";

const OutputComponent: React.FC = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo.todos);
  const [selectedTodo, setSelectedTodo] = useState<number | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState<boolean>(false);

  const handleRemoveTodo = () => {
    if (selectedTodo !== null) {
      dispatch(removeTodo({ id: selectedTodo }));
      setShowDeleteConfirmationModal(false);
      setSelectedTodo(null);
    }
  };

  const handleTodoClick = (id: number) => {
    setSelectedTodo(id);
    setShowDetailsModal(true);
  };

  const handleDeleteButtonClick = (id: number) => {
    setSelectedTodo(id);
    setShowDeleteConfirmationModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedTodo(null);
  };

  const handleCloseDeleteConfirmationModal = () => {
    setShowDeleteConfirmationModal(false);
    setSelectedTodo(null);
  };

  return (
    <div className="container-fluid">
      <div className="row gap-2">
        {todoList.map((todo) => (
          <div
            key={todo.id}
            className="col-sm-6 col-md-4 col-lg-3 m-auto d-flex border-custom mb-2 rounded justify-content-between gap-3 btn pointer"
          >
            <div className="w-100 justify-content-between text-start gap-2 overflow-ellipsis"
            onClick={() => handleTodoClick(todo.id)}>
              <h3 className="overflow-ellipsis text-white"> {todo.task.split("-")[0]}</h3>
              <p className="overflow-ellipsis text-white">{todo.task.split("-")[1]}</p>
              <small className="text-white">Dibuat pada : {todo.createdAt}</small>
            </div>

            <button
              onClick={() => handleDeleteButtonClick(todo.id)}
              className="rounded btn btn-danger m-auto"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
        {/* Todo Details Modal */}
        <Modal
          show={showDetailsModal}
          onHide={handleCloseDetailsModal}>
          <Modal.Header closeButton>
            <Modal.Title>Task Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedTodo !== null && (
              <>
                <h3>{todoList.find(todo => todo.id === selectedTodo)?.task.split("-")[0]}</h3>
                <p>{todoList.find(todo => todo.id === selectedTodo)?.task.split("-")[1]}</p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDetailsModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal show={showDeleteConfirmationModal} onHide={handleCloseDeleteConfirmationModal} centered>
          <Modal.Header>
            <Modal.Title className="m-auto">Delete This Task?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedTodo !== null && (
              <>
                <p>Title: {todoList.find(todo => todo.id === selectedTodo)?.task.split("-")[0]}</p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="danger" onClick={handleRemoveTodo}>
              Yes
            </Button>
            <Button variant="secondary" onClick={handleCloseDeleteConfirmationModal}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default OutputComponent;
