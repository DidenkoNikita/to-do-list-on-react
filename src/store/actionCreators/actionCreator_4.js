import ADDING_MANY_TASK from "../actions/addingManyTask";

const AddingManyTask = (idT, completed, titleT, id) => ({
  type: ADDING_MANY_TASK,
  payload: {idT, completed, titleT, id}
});

export default AddingManyTask;