import ADDING_A_TASK from "../actions/addingATask";

const id = () => window.crypto.randomUUID(); 

const AddingTask = (userId) => ({
  type: ADDING_A_TASK,
  payload: {id: id(), completed: false, title: '', userId}
});

export default AddingTask;
