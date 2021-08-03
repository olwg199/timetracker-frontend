import React, { useState } from "react";
import InputGroup from "../general/InputGroup";
import Button from "../general/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions/taskActions";

function AddTaskView({ currentTask, setActive }) {
  const dispatch = useDispatch();
  const frequencyOptions = [
    "daily",
    "monthly",
    "annual"
  ];
  const taskInitialState = currentTask || { title: "", time: 0, frequency: frequencyOptions[0], description: "", isActive: true };
  const [task, updateTask] = useState(taskInitialState);

  const updateTitle = (e) => { updateTask({ ...task, title: e.target.value }) };
  const updateTime = (e) => { updateTask({ ...task, time: e.target.value }) }
  const updateFrequency = (e) => { updateTask({ ...task, frequency: e.target.value }) };
  const updateDescription = (e) => { updateTask({ ...task, description: e.target.value }) };

  function sendDataToApi(e) {
    e.preventDefault();
    dispatch(addTask(task));
    updateTask(taskInitialState);
    setActive(false);
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
