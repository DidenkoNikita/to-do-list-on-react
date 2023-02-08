import ADDING_MANY_TASK from "../actions/addingManyTask";

const AddingManyTask = (completed, id, title, userId) => ({
  type: ADDING_MANY_TASK,
  payload: {id, completed, title, userId}
});

export default AddingManyTask;