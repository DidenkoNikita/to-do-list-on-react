import { id as randomId } from "../actionCreators/actionCreator_1";
import AddingManyBoard from "../actionCreators/actionCreator_3";
import AddingManyTask from "../actionCreators/actionCreator_4";
import RemoveBoard from "../actionCreators/actionCreator_5";
import RemoveTask from "../actionCreators/actionCreator_6";
import taskNoCompleted from "../actionCreators/actionCreator_7";

let i = 1;
let j = 1;
export let dataFromBoard = JSON.stringify({ "id": randomId(), "title": 'Доска ' + i++, tasks: [] });

export const fetchTodos = () => {
  const idBoard = JSON.parse(localStorage.getItem('id_board')); 
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/read_boards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"idBoard": idBoard})
      });
      const data = await response.json();
      data.forEach(element => {
        let {id, title} = element;
        dispatch(AddingManyBoard(id, title));
      })
    }
     catch (err) {
    }
  }
}

export const fetchTasks = () => { 
  const idBoard = JSON.parse(localStorage.getItem('id_board'));
  const idUser = JSON.parse(localStorage.getItem('id_user'));
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/read_tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"idBoard": idBoard, "idUser": idUser})
      });
      const tasks = await response.json();
      tasks.forEach(task => {
        let {id, completed, title, idBoard} = task;
          dispatch(AddingManyTask(id, completed, title, idBoard));
        })
      } catch (err) {
    }
  }
}

export const recordingBoardDataOnServer = () => {
  const idUser = JSON.parse(localStorage.getItem('id_user'));
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/boards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"title": 'Доска ' + j++, "idUser": idUser})
      });
      const data = await response.json();
      const { id, title } = data;
      localStorage.setItem('id_board', JSON.stringify(id));
      dispatch(AddingManyBoard(id, title));
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
  const idBoard = JSON.parse(localStorage.getItem('id_board'));
  const idUser = JSON.parse(localStorage.getItem('id_user'));
  const body = JSON.stringify({"title": 'Задача', "idBoard": idBoard, "idUser": idUser})
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });
      const data = await response.json();
      const { id, completed, title, idBoard } = data;
      dispatch(AddingManyTask( id, completed, title, idBoard ));
    }
    catch (err) {
      console.log('addin', err);
    }
  }
}

export const removeTasks = (idT) => {
  let ID = idT;
    return async (dispatch) => {
      try {
        const response = await fetch('http://127.0.0.1:7000/tasks', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"idT": ID})
        });
        const data = await response.json();
        const { idT } = data;
        dispatch(RemoveTask(idT));
      }
      catch (err) {
        console.log('removeDataBoards', err);
      }
    }
}

export const asyncCompletedTasks = (idT, completed, titleT, id) => {
    let ID = idT;
    let Completed = completed;
    let TitleT = titleT;
    let Id = id;
    console.log('prev::data', ID, Completed, TitleT, Id);
      return async (dispatch) => {
        try {
          const response = await fetch('http://127.0.0.1:7000/tasks', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({idT: ID, completed: Completed, titleT: TitleT, id: Id})
          });
          const data = await response.json();
          const { idT, completed, titleT, id} = data;
          console.log('data::', idT, completed, titleT, id)
          // dispatch(taskNoCompleted(completed));
          dispatch(taskNoCompleted(idT, completed, titleT, id));
        }
        catch (err) {
          console.log('taskNoCompleted', err);
        }
      }
}

export const signUpUser = (login, password) => {
  return async () => {
    try {
      const response = await fetch('http://127.0.0.1:7000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({login, password})
      });
      const {refreshToken, accessToken, id} = await response.json();
      console.log('refreshToken::', refreshToken);
      console.log('accessToken::', accessToken);
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      localStorage.setItem('id_user', JSON.stringify(id));
    }
    catch (err) {
      console.log('createUser::', err);

    }
  }
}

export const profileUser = (login, password) => {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
  const httpHeaders = {
    Authorization: `Bearer ${accessToken}`,
    AuthorizationTwo: `Bearer ${refreshToken}`,
    'Content-Type': 'application/json'
  }

  const myHeaders = new Headers(httpHeaders);
  
  return async () => {
    try {
      const response = await fetch('http://127.0.0.1:7000/login', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({login, password})
      });
      const data = await response.json();
      const accessToken = data;
      // console.log('token::', token)
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
    } catch (err) {
      console.log('profileUser::', err);
    }
  }
}