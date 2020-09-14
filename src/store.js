import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import addTodo from './reducers';

// Note: this API requires redux@>=3.1.0
 const store = createStore(combineReducers({addTodo}) , applyMiddleware(thunkMiddleware));

 export default store;