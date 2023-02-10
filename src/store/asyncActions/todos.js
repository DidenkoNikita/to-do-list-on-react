import AddingManyBoard from "../actionCreators/actionCreator_3";
import AddingManyTask from "../actionCreators/actionCreator_4";


export const fetchTodos = () => { 
  
  return async (dispatch) => {
    const options = {
      method: 'GET',
      mode: "no-cors",
    };
    try {
      const response = await fetch('http://127.0.0.1:7000/boards', options);
      const data = await response.json();
      await data.forEach(element => {
        let {id, title, tasks} = element
        let {idT, completed, titleT} = tasks
        dispatch(AddingManyBoard(id, title, tasks))
        dispatch(AddingManyTask(idT, completed, titleT))
      })
    }
     catch (err) {
      console.log('fetchTodos::err', err);
    }
  }
}