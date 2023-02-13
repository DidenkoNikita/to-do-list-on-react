import AddingManyBoard from "../actionCreators/actionCreator_3";
import AddingManyTask from "../actionCreators/actionCreator_4";


export const fetchTodos = () => { 
  
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/boards');
      console.log('fetchTodos::response', response)
      const data = await response.json();
      console.log('fetchTodos::data', data)
      data.forEach(element => {
        let {id, title, tasks} = element;
        let [{idT, completed, titleT}] = tasks;
        console.log('todos::tasks',idT, completed, titleT);
        dispatch(AddingManyBoard(id, title, tasks));
        dispatch(AddingManyTask(idT, completed, titleT));
      })
    }
     catch (err) {
      console.log('fetchTodos::err', err);
    }
  }
}