import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { addingTasks, asyncCompletedTasks, fetchTasks, fetchTodos, recordingBoardDataOnServer, removeDataBoards, removeTasks } from './asyncActions/todos';
import initialState from './initialState';
import reducer from './reducers/reduser_1';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export const addBoard = () => { 
  store.dispatch(recordingBoardDataOnServer());
}

export const removeBoard = (id) => {
  store.dispatch(removeDataBoards(id));
  console.log('remove');
}

export const addTask = (id) => {
  store.dispatch(addingTasks(id));
}

export const addManyBoards = () => {
  store.dispatch(fetchTodos());
  store.dispatch(fetchTasks());
}

export const removeTask = (idT) => {
  store.dispatch(removeTasks(idT));
  console.log('remove tasks');
}

export const completedTask = (idT, completed, titleT, id) => {
  store.dispatch(asyncCompletedTasks(idT, completed, titleT, id));
  console.log('completed::idT::', idT, completed, titleT, id);
}

export default store;