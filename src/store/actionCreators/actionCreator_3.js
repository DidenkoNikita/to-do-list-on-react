import ADDING_MANY_BOARD from "../actions/addingManyBoard";

const AddingManyBoard = (id, title, tasks) => {
  return {
    type: ADDING_MANY_BOARD,
    payload: { id, title, tasks },
  }
};

export default AddingManyBoard;