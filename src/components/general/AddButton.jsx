import React from "react";

function AddButton() {
    function activateAddView(e){
        e.preventDefault();
        document.querySelector(".add-task").classList.remove("disabled");
    }

    return (
        <a href="" className="add-button" onClick={activateAddView}>
            <i className="fas fa-plus"></i>
        </a>
    )
}

export default AddButton;