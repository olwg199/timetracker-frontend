import React, { useState } from "react";
import "../../css/goalView.css";
import TimeHelper from "../../helpers/TimeHelper";
import Stopwatch from "./Stopwatch";
import AddUpdateGoalView from "../mainArea/AddUpdateGoalView";
import Modal from "./Modal";

function GoalView({ goal, deleteGoal, updateSpentTime }) {
    const [updateGoalViewActive, setUpdateGoalViewActive] = useState(false);

    return (
        <div className="goal-item">
            <div className="goal-item_title">{goal.title}</div>
            <div className="goal-item_time">
                <i className="far fa-clock"></i>{TimeHelper.getTimeBySeconds(TimeHelper.getSecondsFromMinutes(goal.time))}
            </div>
            <Stopwatch saveTime={updateSpentTime} />
            <div className="goal-item_edit" onClick={() => { setUpdateGoalViewActive(true) }}><i className="fas fa-pen-square"></i></div>
            <div className="goal-item_delete" onClick={deleteGoal}><i className="fas fa-trash-alt"></i></div>

            <Modal active={updateGoalViewActive} setActive={setUpdateGoalViewActive} title="Update goal">
                <AddUpdateGoalView currentGoal={goal} setActive={setUpdateGoalViewActive} type="update" />
            </Modal>
        </div>
    );
}

export default GoalView;