import React, { Component } from "react";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item, onDeleteItem, onEditItem, editTask } = this.props;
    console.log('Grand Child')
    return (
      <li>
        <span>{item.task}</span>

        <button
          disabled={editTask && editTask.id === item.id}
          onClick={() => onDeleteItem(item.id)}
        >
          Delete
        </button>
        <button onClick={() => onEditItem(item)}>Edit</button>
      </li>
    );
  }
}

export default TodoListItem