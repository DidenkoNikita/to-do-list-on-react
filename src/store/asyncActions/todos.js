import AddingManyBoard from "../actionCreators/actionCreator_3";
import AddingManyTask from "../actionCreators/actionCreator_4";


export const fetchTodos = () => { 
  
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/boards');
      const data = await response.json();
      data.forEach(element => {
        let {id, title, tasks} = element;
        tasks.forEach(task => {
          let {idT, completed, titleT} = task;
            dispatch(AddingManyTask(idT, completed, titleT, id));
          })
          dispatch(AddingManyBoard(id, title, tasks));
      })
    }
     catch (err) {
    }
  }
}