import React, { useState } from "react";
import InputGroup from "components/general/InputGroup";
import Button from "components/general/Button";
import { useDispatch } from "react-redux";
import { addGoal, updateGoal } from "actions/goalActions";
import "css/general/addUpdateGoal.css";

function AddUpdateGoal({ currentGoal, setActive, type }) {
  const dispatch = useDispatch();
  const frequencyOptions = [
    "daily",
    "monthly",
    "annual"
  ];
  const goalInitialState = currentGoal || { title: "", time: 0, frequency: frequencyOptions[0], description: "", isActive: true };
  const [goal, setGoal] = useState(goalInitialState);

  const updateTitle = (e) => { setGoal({ ...goal, title: e.target.value }) };
  const updateTime = (e) => { setGoal({ ...goal, time: e.target.value }) }
  const updateFrequency = (e) => { setGoal({ ...goal, frequency: e.target.value }) };
  const updateDescription = (e) => { setGoal({ ...goal, description: e.target.value }) };

  function sendDataToApi(e) {
    e.preventDefault();
    const validationResult = validateGoal(goal);
    if (!validationResult.isValid) {
      alert(validationResult.message);
      return;
    }

    switch (type) {
      case "update": {
        console.log(dispatch(updateGoal(goal)));
        break;
      }
      default: {
        dispatch(addGoal(goal));
        setGoal(goalInitialState);
      }
    }

    setActive(false);
  };

  function validateGoal(item) {
    let isValid = true;
    const messages = [];
    if (!goal.title) {
      isValid = false;
      messages.push("Field title is required!");
    }
    if (goal.time <= 0) {
      isValid = false;
      messages.push("Time must be grater than 0.");
    }
    if (!goal.frequency) {
      isValid = false;
      messages.push("You have to choose your frequency.");
    }
    return {
      isValid,
      message: messages.join(" ")
    }
  }

  return (
    <div className="add-goal">
      <InputGroup name="Title" value={goal.title} setValue={updateTitle} />
      <InputGroup name="Time" value={goal.time} setValue={updateTime} type="number" />
      <InputGroup name="Frequency" value={goal.frequency} setValue={updateFrequency} type="select" options={frequencyOptions} />
      <InputGroup name="Description" value={goal.description} setValue={updateDescription} type="textarea" rows="5" />
      <Button text={type === "update" ? "Update goal" : "Add goal"} href="#" onClick={sendDataToApi} classList={["btn", "add-goal-button"]} />
    </div>
  );
}

export default AddUpdateGoal;
