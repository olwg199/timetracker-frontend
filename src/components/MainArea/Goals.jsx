import React, { useEffect } from "react";
import GoalView from "components/general/GoalView";
import { useSelector, useDispatch } from "react-redux";
import { getGoals, deleteGoal } from "actions/goals-actions";
import Accordion from "components/general/Accordion";

import "css/general/goals.css";

function Goals(props) {
    const dispatch = useDispatch();
    const goalList = useSelector(state => state.goals);

    useEffect(() => {
        dispatch(getGoals());
    }, [goalList.length, dispatch]);

    return (
        <section className="goal-list">

            <Accordion title="Daily goals">
                {goalList.length > 0 ?
                    goalList.reduce((dailyGoals, goal) => {
                        if (goal.frequency === "daily") {
                            dailyGoals.push(<GoalView goal={goal} key={goal._id} deleteGoal={() => { dispatch(deleteGoal(goal._id)) }} />);
                        }
                        return dailyGoals;
                    }, [])
                    :
                    "Sorry, no goals available"
                }
            </Accordion>
            <Accordion title="Monthly goals">
                {goalList.length > 0 ?
                    goalList.reduce((monthlyGoals, goal) => {
                        if (goal.frequency === "monthly") {
                            monthlyGoals.push(<GoalView goal={goal} key={goal._id} deleteGoal={() => { dispatch(deleteGoal(goal._id)) }} />);
                        }
                        return monthlyGoals;
                    }, [])
                    :
                    "Sorry, no goals available"
                }
            </Accordion>
            <Accordion title="Annual goals">
                {goalList.length > 0 ?
                    goalList.reduce((annualGoals, goal) => {
                        if (goal.frequency === "annual") {
                            annualGoals.push(<GoalView goal={goal} key={goal._id} deleteGoal={() => { dispatch(deleteGoal(goal._id)) }} />);
                        }
                        return annualGoals;
                    }, [])
                    :
                    "Sorry, no goals available"
                }
            </Accordion>
        </section>
    );
}

export default Goals;