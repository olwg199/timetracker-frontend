import React from "react";

function AddTaskView(props) {
  return (
    <div
    className="modal fade"
      id="addTask"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Task
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form>
            <div className="modal-body">
              <div className="input-group mb-3">
                <label htmlFor="new-task-title" className="input-group-text">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="new-task-title"
                ></input>
              </div>

              <div className="input-group mb-3">
                <label htmlFor="new-task-start" className="input-group-text">
                  Start
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="new-task-start"
                ></input>

                <input
                  type="date"
                  className="form-control"
                  id="new-task-end"
                ></input>
                <label htmlFor="new-task-end" className="input-group-text">
                  End
                </label>
              </div>

              <div className="input-group mb-3">
                <label htmlFor="new-task-title" className="input-group-text">
                  Spend
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="new-task-title"
                ></input>

                <span className="input-group-text" id="addon-wrapping">
                  minutes per
                </span>
                <select className="form-select" aria-label="Time range selector">
                  <option value="1" defaultValue>
                    day
                  </option>
                  <option value="2">week</option>
                  <option value="3">month</option>
                  <option value="4">year</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="new-task-desc" className="input-group-text">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="new-task-desc"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-outline-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTaskView;
