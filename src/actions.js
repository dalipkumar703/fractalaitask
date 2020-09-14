import {ADD_TODO} from './constants';
//add to do bucket
export const addTodo = (bucket) => {
  return {
    type: ADD_TODO,
    action: bucket,
  }
}

