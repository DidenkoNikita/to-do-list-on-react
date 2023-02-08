import ADDING_MANY_BOARD from "../actions/addingManyBoard";

let i = 1;

const AddingManyBoard = (userId) => {
  return {
    type: ADDING_MANY_BOARD,
    payload: { id: userId, title: 'Доска ' + i++, tasks: [], userId },
  }
};

export default AddingManyBoard;