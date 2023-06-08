import React from "react";
import { PureComponent } from "react";
import TodoListItem from "./todoListItem";

class PureTodoListBox extends PureComponent {
  constructor(props) {
    super(props);
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

export default PureTodoListBox;
