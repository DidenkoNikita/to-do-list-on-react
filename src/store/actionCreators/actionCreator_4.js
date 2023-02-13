import ADDING_MANY_TASK from "../actions/addingManyTask";

const AddingManyTask = (idT, completed, titleT) => ({
  type: ADDING_MANY_TASK,
  payload: {idT, completed, titleT}
});

export default AddingManyTask;