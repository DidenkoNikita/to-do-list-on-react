import AddingManyBoard from "../actionCreators/actionCreator_3";
import AddingManyTask from "../actionCreators/actionCreator_4";


export const fetchTodos = () => { 
  
  return async (dispatch) => {
    const options = {
      method: 'GET'
    };
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/user/1/todos', options);
      const data = await response.json();
      await data.forEach(element => {
        let {completed, id, title, userId} = element
        dispatch(AddingManyBoard(userId))
        dispatch(AddingManyTask(completed, id, title, userId))
      })
    }
     catch (err) {
      console.log('fetchTodos::err', err);
    }
  }
}