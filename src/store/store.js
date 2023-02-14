import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import AddingTask from './actionCreators/actionCreator_2';
import AddingManyTask from './actionCreators/actionCreator_4';
import { fetchTodos, recordingBoardDataOnServer, removeDataBoards } from './asyncActions/todos';
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
  store.dispatch(AddingTask(id));
}

export const addManyBoards = () => {
  store.dispatch(fetchTodos());
}

export const addManyTasks = (id) => {
  store.dispatch(AddingManyTask(id));
}

export default store;