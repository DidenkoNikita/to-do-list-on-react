import { id as randomId } from "../actionCreators/actionCreator_1";
import AddingManyBoard from "../actionCreators/actionCreator_3";
import AddingManyTask from "../actionCreators/actionCreator_4";
import RemoveBoard from "../actionCreators/actionCreator_5";

// let url = 'http://127.0.0.1:7000/boards';
let i = 1;
let j = 1;
export let dataFromBoard = JSON.stringify({ "id": randomId(), "title": 'Доска ' + i++, tasks: [] });

export const fetchTodos = () => { 
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/boards');
      const data = await response.json();
      data.forEach(element => {
        let {id, title, tasks} = element;
        dispatch(AddingManyBoard(id, title, tasks));
      })
    }
     catch (err) {
    }
  }
}

export const fetchTasks = () => { 
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/tasks');
      const tasks = await response.json();
      tasks.forEach(task => {
        let {idT, completed, titleT, id} = task;
          dispatch(AddingManyTask(idT, completed, titleT, id));
        })
      } catch (err) {
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
        body: JSON.stringify({"id": randomId(), "title": 'Доска ' + j++, "tasks": []})
      });
      const data = await response.json();
      const { id, title, tasks } = data;
      dispatch(AddingManyBoard(id, title, tasks));
    }
    catch (err) {
      console.log('recordingBoardDataOnServer', err);
    }
  }
}

export const removeDataBoards = (id) => {
let ID = id;
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/boards', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"id": ID})
      });
      const data = await response.json();
      const { id } = data;
      dispatch(RemoveBoard(id));
    }
    catch (err) {
      console.log('removeDataBoards', err);
    }
  }
}

export const addingTasks = (id) => {
  let ID = id;
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"idT": randomId(), completed: false, "titleT": 'Задача', id: ID})
      });
      const data = await response.json();
      const { idT, completed, titleT, id } = data;
      dispatch(AddingManyTask(idT, completed, titleT, id));
    }
    catch (err) {
      console.log('addin', err);
    }
  }
}