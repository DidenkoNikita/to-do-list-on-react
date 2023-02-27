import ADDING_A_BOARD from "../actions/addingABoard";
import ADDING_A_TASK from "../actions/addingATask";
import ADDING_MANY_BOARD from "../actions/addingManyBoard";
import ADDING_MANY_TASK from "../actions/addingManyTask";
import REMOVE_BOARD from "../actions/removeBoard";
import REMOVE_TASK from "../actions/removeTask";
import TASK_NO_COMPLETED from "../actions/taskNoCompleted";

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
        };

        case ADDING_MANY_TASK:
          return {
            ...state,
            tasks: [...state.tasks, action.payload]
        };

        case REMOVE_BOARD:   
          return {
            ...state,
            boards: [...state.boards.filter(board => board.id !== action.payload.id)]
          };

        case REMOVE_TASK: 
          return {
            ...state,
            tasks: [...state.tasks.filter(task => task.idT !== action.payload.idT)]
          }

        case TASK_NO_COMPLETED: {
          console.log('action::',action.payload)
          return {
            ...state,
            tasks: [state.tasks, action.payload]
          }
        }
          
      default: return state;
  }
}

export default reducer;