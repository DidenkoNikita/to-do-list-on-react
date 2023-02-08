import ADDING_A_BOARD from "../actions/addingABoard";

const id = () => window.crypto.randomUUID(); 

export let i = 1;

const AddingBoard = (payload) => ({
  type: ADDING_A_BOARD,
  payload: {id: id(), title: 'Доска ' + i++, tasks: [], userId: id}
});
   

export default AddingBoard;