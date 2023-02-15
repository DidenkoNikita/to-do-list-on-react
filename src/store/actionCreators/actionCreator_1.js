import ADDING_A_BOARD from "../actions/addingABoard";
export const id = () => window.crypto.randomUUID(); 

export let i = 1;

const AddingBoard = (payload) => ({
  type: ADDING_A_BOARD,
  payload: {id: id(), title: 'Доска ' + i++, tasks: []}
});
   

export default AddingBoard;