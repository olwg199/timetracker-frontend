import React from "react";

function AddTaskView(props) {
  return (
    <div
      class="modal fade"
      id="addTask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add Task
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form>
            <div class="modal-body">
              <div className="input-group mb-3">
                <label for="new-task-title" class="input-group-text">
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="new-task-title"
                ></input>
              </div>

              <div className="input-group mb-3">
                <label for="new-task-start" class="input-group-text">
                  Start
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="new-task-start"
                ></input>

                <input
                  type="date"
                  class="form-control"
                  id="new-task-end"
                ></input>
                <label for="new-task-end" class="input-group-text">
                  End
                </label>
              </div>

              <div className="input-group mb-3">
                <label for="new-task-title" class="input-group-text">
                  Spend
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="new-task-title"
                ></input>

                <span class="input-group-text" id="addon-wrapping">
                  minutes per
                </span>
                <select class="form-select" aria-label="Time range selector">
                  <option value="1" selected>
                    day
                  </option>
                  <option value="2">week</option>
                  <option value="3">month</option>
                  <option value="4">year</option>
                </select>
              </div>

              <div className="input-group">
                <label for="new-task-desc" class="input-group-text">
                  Description
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="new-task-desc"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-outline-primary">
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
