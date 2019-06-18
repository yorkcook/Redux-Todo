import uuid from "uuid/v4";
import { ADD_NEW_TODO, TOGGLE_TODO } from "../actions/index";

const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = {
        id: uuid(),
        content: action.payload,
        isCompleted: false
      };

      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        })
      };

    default:
      return state;
  }
};
