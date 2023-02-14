import REMOVE_BOARD from "../actions/removeBoard";

export let i = 1;

const RemoveBoard = (id) => ({
  type: REMOVE_BOARD,
  payload: {id}
});
   

export default RemoveBoard;