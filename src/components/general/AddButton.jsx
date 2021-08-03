import React from "react";

function AddButton({ active, setActive }) {

  return (
    <button type="button" className="btn add-button" onClick={() => setActive(!active)}>
      <i className="fas fa-plus"></i>
    </button>
  );
}

export default AddButton;
