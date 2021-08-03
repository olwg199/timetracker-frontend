import React, { useState } from "react";
import InputGroup from "../general/InputGroup";
import Button from "../general/Button";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../actions/taskActions";

function AddUpdateTaskView({ currentTask, setActive, type }) {
  const dispatch = useDispatch();
  const frequencyOptions = [
    "daily",
    "monthly",
    "annual"
  ];
  const taskInitialState = currentTask || { title: "", time: 0, frequency: frequencyOptions[0], description: "", isActive: true };
  const [task, setTask] = useState(taskInitialState);

  const updateTitle = (e) => { setTask({ ...task, title: e.target.value }) };
  const updateTime = (e) => { setTask({ ...task, time: e.target.value }) }
  const updateFrequency = (e) => { setTask({ ...task, frequency: e.target.value }) };
  const updateDescription = (e) => { setTask({ ...task, description: e.target.value }) };

  function sendDataToApi(e) {
    e.preventDefault();
    switch (type) {
      case "update": {
        dispatch(updateTask(task));
        break;
      }
      default: {
        dispatch(addTask(task));
        console.log(taskInitialState);
        setTask(taskInitialState);
      }
    }

    setActive(false);
  };

  return (
    <div className="add-task">
      <InputGroup name="Title" value={task.title} setValue={updateTitle} />
      <InputGroup name="Time" value={task.time} setValue={updateTime} type="number" />
      <InputGroup name="Frequency" value={task.frequency} setValue={updateFrequency} type="select" options={frequencyOptions} />
      <InputGroup name="Description" value={task.description} setValue={updateDescription} type="textarea" rows="5" />
      <Button text={type === "update" ? "Update task" : "Add task"} href="#" onClick={sendDataToApi} classList={["btn add-task-button"]} />
    </div>
  );
}

export default AddUpdateTaskView;
