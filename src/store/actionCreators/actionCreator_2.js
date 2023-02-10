import ADDING_A_TASK from "../actions/addingATask";

const ID = () => window.crypto.randomUUID(); 

const AddingTask = (id) => ({
  type: ADDING_A_TASK,
  payload: {idT: ID(), completed: false, titleT: '', id}
});

export default AddingTask;
