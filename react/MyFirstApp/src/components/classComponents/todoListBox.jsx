import React from "react";
import { Component } from "react";
import TodoListItem from "./todoListItem";

class TodoListBox extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.tasks!=this.props.tasks){
        return true
    }else{
        return false
    }
  }

  render() {
    const { tasks, ...rest } = this.props;
    console.log('Child')
    return (
      <ul className="tl-list-container">
        {tasks.map((i) => (
          <TodoListItem item={i} key={i.id} {...rest} />
        ))}
      </ul>
    );
  }
}

export default TodoListBox;
