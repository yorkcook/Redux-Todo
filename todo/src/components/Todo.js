import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";

class Todo extends Component {
  handleChanges = () => {
    console.log(this.props.id);
    this.props.toggleTodo(this.props.id);
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.isCompleted}
          onChange={this.handleChanges}
        />
        <p>{this.props.content}</p>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { toggleTodo }
)(Todo);
