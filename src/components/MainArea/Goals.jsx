import React, { useEffect } from "react";
import GoalView from "components/UI/GoalView";
import { useSelector, useDispatch } from "react-redux";
import { getGoals, deleteGoal } from "actions/goals-actions";
import Accordion from "components/UI/Accordion";

import "css/MainArea/goals.css";

function Goals(props) {
    const dispatch = useDispatch();
    const goals = useSelector(state => state.goals).reduce((goals, goal) => {
        if (goal.frequency === "daily") {
            goals.daily.push(<GoalView goal={goal} key={goal.id} deleteGoal={() => { dispatch(deleteGoal(goal.id)) }} />);
        }
        if (goal.frequency === "monthly") {
            goals.monthly.push(<GoalView goal={goal} key={goal.id} deleteGoal={() => { dispatch(deleteGoal(goal.id)) }} />);
        }
        if (goal.frequency === "annual") {
            goals.annual.push(<GoalView goal={goal} key={goal.id} deleteGoal={() => { dispatch(deleteGoal(goal.id)) }} />);
        }
        return goals;
    }, { daily: [], monthly: [], annual: [] });

    useEffect(() => {
        console.log("Start loading");
        dispatch(getGoals());
        console.log("End loading");
    }, [goals.daily.length, goals.monthly.length, goals.annual.length, dispatch]);

    return (
        <section className="goal-list">

            <Accordion title="Daily goals">
                {goals.daily.length > 0 ?
                    goals.daily
                    :
                    "Sorry, no goals available"
                }
            </Accordion>
            <Accordion title="Monthly goals">
                {goals.monthly.length > 0 ?
                    goals.monthly
                    :
                    "Sorry, no goals available"
                }
            </Accordion>
            <Accordion title="Annual goals">
                {goals.annual.length > 0 ?
                    goals.annual
                    :
                    "Sorry, no goals available"
                }
            </Accordion>
        </section>
    );
}

export default Goals;