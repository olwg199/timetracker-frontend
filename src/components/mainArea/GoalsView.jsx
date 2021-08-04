import React, { useEffect } from "react";
import GoalView from "../general/GoalView";
import { useSelector, useDispatch } from "react-redux";
import { getGoals, removeGoal } from "../../actions/goalActions";

function GoalsView(props) {
    const dispatch = useDispatch();
    const goalList = useSelector(state => state.goals);

    useEffect(() => {
        dispatch(getGoals());
    }, [goalList.length, dispatch]);

    return (
        <section className="goal-list">
            {goalList.length ?
                goalList.map((goal) => <GoalView goal={goal} key={goal._id} deleteGoal={() => { dispatch(removeGoal(goal._id)) }} />)
                :
                "Sorry, no goals available"
            }
        </section>
    );
}

export default GoalsView;