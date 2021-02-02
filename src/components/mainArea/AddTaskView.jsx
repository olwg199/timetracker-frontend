import React from "react";

function AddTaskView(props) {
    function disableAddView(e) {
        document.querySelector(".add-task").classList.add("disabled");
    }

    return (
        <div className="add-task disabled">
            <div className="row">
                <div className="add-task_title">
                    Add your task
                </div>
                <div className="add-task_close-button" onClick={disableAddView}>
                    <i class="fas fa-times"></i>
                </div>
            </div>


            <form>
                aaa
            </form>
        </div>
    )
}

export default AddTaskView;