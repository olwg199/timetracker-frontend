import React, { useState } from "react";
import InputGroup from "../general/InputGroup";
import axios from "axios";
import Button from "../general/Button";

function AddTaskView({ active, setActive }) {
  const frequencyOptions = [
    "daily",
    "monthly",
    "annual"
  ];
  const taskInitialState = { title: "", time: 0, frequency: "", description: "", isActive: true };
  const [task, updateTask] = useState(taskInitialState);

  const updateTitle = (e) => { updateTask({ ...task, title: e.target.value }) };
  const updateTime = (e) => { updateTask({ ...task, time: e.target.value }) }
  const updateFrequency = (e) => { updateTask({ ...task, frequency: e.target.value }) };
  const updateDescription = (e) => { updateTask({ ...task, description: e.target.value }) };

  function sendDataToApi(e) {
    e.preventDefault();
    axios.post("https://timetracker-api-node.herokuapp.com/tasks", task)
      .then(result => {
        console.log(result);
        alert("You succesefully added a new goal!");
        updateTask(taskInitialState);
        document.querySelector("#modal-header_close-btn").click();
      })
      .catch(err => {
        console.log(err);
        alert(err)
      });
  };

  return (
    <div className="add-task">
      <InputGroup name="Title" value={task.title} setValue={updateTitle} />
      <InputGroup name="Time" value={task.time} setValue={updateTime} type="number" />
      <InputGroup name="Frequency" value={task.frequency} setValue={updateFrequency} type="select" options={frequencyOptions} />
      <InputGroup name="Description" value={task.description} setValue={updateDescription} type="textarea" rows="5" />
      <Button text="Add task" href="#" onClick={sendDataToApi} classList={["btn add-task-button"]} />
    </div>
  );
}

export default AddTaskView;
