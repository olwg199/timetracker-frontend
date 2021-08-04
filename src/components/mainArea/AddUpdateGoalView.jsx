import React, { useState } from "react";
import InputGroup from "../general/InputGroup";
import Button from "../general/Button";
import { useDispatch } from "react-redux";
import { addGoal, updateGoal } from "../../actions/goalActions";

function AddUpdateGoalView({ currentGoal, setActive, type }) {
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
    switch (type) {
      case "update": {
        dispatch(updateGoal(goal));
        break;
      }
      default: {
        dispatch(addGoal(goal));
        console.log(goalInitialState);
        setGoal(goalInitialState);
      }
    }

    setActive(false);
  };

  return (
    <div className="add-goal">
      <InputGroup name="Title" value={goal.title} setValue={updateTitle} />
      <InputGroup name="Time" value={goal.time} setValue={updateTime} type="number" />
      <InputGroup name="Frequency" value={goal.frequency} setValue={updateFrequency} type="select" options={frequencyOptions} />
      <InputGroup name="Description" value={goal.description} setValue={updateDescription} type="textarea" rows="5" />
      <Button text={type === "update" ? "Update goal" : "Add goal"} href="#" onClick={sendDataToApi} classList={["btn add-goal-button"]} />
    </div>
  );
}

export default AddUpdateGoalView;
