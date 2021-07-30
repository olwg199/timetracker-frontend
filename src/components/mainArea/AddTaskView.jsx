import React, { useState } from "react";
import axios from "axios";

function AddTaskView({ active, setActive }) {

  const [task, updateTask] = useState({ title: "", startDate: "", endDate: "", time: 0, description: "" });

  function sendDataToApi(e) {
    e.preventDefault();
    axios.post("https://timetracker-api-node.herokuapp.com/tasks", task)
      .then(result => {
        console.log(result);
        document.getElementById("add-task-form").submit();
      })
      .catch(err => alert(err));
  };

  return (
    <div className="add-task">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo, molestias, voluptate fugiat possimus voluptas nisi, repudiandae quidem tempore architecto earum amet? Obcaecati ipsum distinctio adipisci? Facere nulla perferendis quos.
    </div>
  );
}

export default AddTaskView;
