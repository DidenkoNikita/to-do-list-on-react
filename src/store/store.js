import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// import AddingTask from './actionCreators/actionCreator_2';
// import AddingManyTask from './actionCreators/actionCreator_4';
import { addingTasks, fetchTasks, fetchTodos, recordingBoardDataOnServer, removeDataBoards } from './asyncActions/todos';
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

// export const addManyTasks = () => {
// }

export default store;