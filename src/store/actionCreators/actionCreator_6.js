import REMOVE_TASK from "../actions/removeTask";

export let i = 1;

const RemoveTask = (idT) => ({
  type: REMOVE_TASK,
  payload: {idT}
});
   

export default RemoveTask;