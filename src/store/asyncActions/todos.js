import { id as randomId } from "../actionCreators/actionCreator_1";
import AddingManyBoard from "../actionCreators/actionCreator_3";
import AddingManyTask from "../actionCreators/actionCreator_4";

// let url = 'http://127.0.0.1:7000/boards';
let i = 0;
export let dataFromBoard = JSON.stringify({ "id": randomId(), "title": 'Доска ' + i++, tasks: [] });

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

export const recordingBoardDataOnServer = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/boards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"id": randomId(), "title": 'New board', "tasks": []})
      });
      const data = await response.json();
      const { id, title, tasks } = data;
      dispatch(AddingManyBoard(id, title, tasks));
    }
    catch (err) {
      console.log('recordingBoardDataOnServer', err);
    }
  }
  // dispatch(AddingManyBoard(id, title, tasks));
}

// recordingBoardDataOnServer('http://127.0.0.1:7000/boards', { "id": id(), "title": 'Доска ' + i++, tasks: [] })
//   .then((data) => {
//     console.log(data);
//   });