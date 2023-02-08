import ADDING_A_BOARD from "../actions/addingABoard";
import ADDING_A_TASK from "../actions/addingATask";
import ADDING_MANY_BOARD from "../actions/addingManyBoard";
import ADDING_MANY_TASK from "../actions/addingManyTask";

function reducer(state, action) {
  switch(action.type) {
      case ADDING_A_BOARD:
        return {
           ...state, 
           boards: [...state.boards, action.payload] 
          };

      case ADDING_A_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };

      case ADDING_MANY_BOARD: 
        return {
          ...state,
          boards: [...state.boards, action.payload]
        }

        case ADDING_MANY_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };

      default: return state;
  }
}

export default reducer;