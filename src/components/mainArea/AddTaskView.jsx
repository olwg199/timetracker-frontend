import React, { useState } from "react";
// import axios from "axios";

function AddTaskView({ active, setActive }) {

  // const [task, updateTask] = useState({ title: "", startDate: "", endDate: "", time: 0, description: "" });

  // function sendDataToApi(e) {
  //   e.preventDefault();
  //   axios.post("https://timetracker-api-node.herokuapp.com/tasks", task)
  //     .then(result => {
  //       console.log(result);
  //       document.getElementById("add-task-form").submit();
  //     })
  //     .catch(err => alert(err));
  // };

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(!active)}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>

      </div>
    </div>
  );
}

export default AddTaskView;
