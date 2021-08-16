import React, { useEffect, useState } from "react";
import Modal from "components/UI/Modal";
import AddUpdateGoal from "components/UI/AddUpdateGoal";
import AddButton from "components/UI/AddButton";
import GoalView from "components/UI/GoalView";
import { useSelector, useDispatch } from "react-redux";
import { fetchGoals, deleteGoal } from "actions/goals-actions";
import Accordion from "components/UI/Accordion";

import "css/MainArea/goals.css";

function Goals(props) {
  const dispatch = useDispatch();
  const [addGoalViewActive, setAddGoalViewActive] = useState(false);
  const { isLoading, list } = useSelector((state) => state.goals);

  const goals = list.reduce(
    (goals, goal) => {
      if (goal.frequency === "daily") {
        goals.daily.push(
          <GoalView
            goal={goal}
            key={goal.id}
            deleteGoal={() => {
              dispatch(deleteGoal(goal.id));
            }}
          />
        );
      }
      if (goal.frequency === "monthly") {
        goals.monthly.push(
          <GoalView
            goal={goal}
            key={goal.id}
            deleteGoal={() => {
              dispatch(deleteGoal(goal.id));
            }}
          />
        );
      }
      if (goal.frequency === "annual") {
        goals.annual.push(
          <GoalView
            goal={goal}
            key={goal.id}
            deleteGoal={() => {
              dispatch(deleteGoal(goal.id));
            }}
          />
        );
      }
      return goals;
    },
    { daily: [], monthly: [], annual: [] }
  );

  useEffect(() => {
    dispatch(fetchGoals());
  }, [list.length, dispatch]);

  return (
    <section className="goal-list">
      <Accordion title="Daily goals">
        {goals.daily.length > 0
          ? goals.daily
          : isLoading
          ? "Loading"
          : "Sorry, no goals available"}
      </Accordion>
      <Accordion title="Monthly goals">
        {goals.monthly.length > 0 ? goals.monthly : "Sorry, no goals available"}
      </Accordion>
      <Accordion title="Annual goals">
        {goals.annual.length > 0 ? goals.annual : "Sorry, no goals available"}
      </Accordion>

      <AddButton active={addGoalViewActive} setActive={setAddGoalViewActive} />

      <Modal
        active={addGoalViewActive}
        setActive={setAddGoalViewActive}
        title="Add goal"
      >
        <AddUpdateGoal setActive={setAddGoalViewActive} />
      </Modal>
    </section>
  );
}

export default Goals;
