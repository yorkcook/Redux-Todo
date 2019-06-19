import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);

//export default TodoList;
