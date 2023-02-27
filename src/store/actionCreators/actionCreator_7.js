import TASK_NO_COMPLETED from "../actions/taskNoCompleted";

const taskNoCompleted = (idT, completed, titleT, id) => ({
  type: TASK_NO_COMPLETED,
  payload: {idT, completed, titleT, id}
})

export default taskNoCompleted;