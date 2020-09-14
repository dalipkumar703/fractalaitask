import { ADD_TODO } from './constants';
let bucketCopy = [];
let count = 1;
bucketCopy.push({name: "dalip", id: count});
const initialStateAddTodo = bucketCopy;

 const addTodo = (state = initialStateAddTodo, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, Object.assign({}, action.action, {id : ++count})]
      default:
      return state
  }
}
export default addTodo;
  