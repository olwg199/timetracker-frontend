import React from "react";

function AddButton() {

  return (
    <button
      type="button"
      className="btn add-button"
      data-bs-toggle="modal"
      data-bs-target="#addTask"
    >
      <i className="fas fa-plus"></i>
    </button>
  );
}

export default AddButton;
