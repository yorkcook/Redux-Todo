export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addNewTodo = newTodo => {
  return {
    type: ADD_NEW_TODO,
    payload: newTodo
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};
