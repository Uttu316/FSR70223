import React from "react";
import { Component } from "react";
import PureTodoListBox from "./PureTodoList";
import TodoListBox from "./todoListBox";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      allTasks: [],
      editMode: false,
      editTask: null,
    };
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(e) {
    const { value } = e.target;
    this.setState({
      task: value,
    });
  }
  addTask = () => {
    const { task } = this.state;
    const newTasks = [...this.state.allTasks];
    newTasks.unshift({
      task,
      id: new Date().getTime(),
    });
    this.setState({
      allTasks: newTasks,
      task: "",
    });
  };
  onDeleteItem = (id) => {
    const newTasks = this.state.allTasks.filter((i) => i.id !== id);
    this.setState({
      allTasks: newTasks,
    });
  };
  onEditItem = (item) => {
    this.setState({
      editMode: true,
      task: item.task,
      editTask: item,
    });
  };
  updateTask = () => {
    const { task, editTask } = this.state;
    const newTasks = [...this.state.allTasks];
    let index = newTasks.findIndex((i) => i.id === editTask.id);
    newTasks[index] = {
      id: editTask.id,
      task,
    };
    this.setState({
      allTasks: newTasks,
      task: "",
      editTask: null,
      editMode: false,
    });
  };

  render() {
    console.log(this.props);
    console.log('Parent')
    return (
      <div className="tl-container">
        <textarea
          value={this.state.task}
          onChange={this.onChangeInput}
          placeholder="Enter your task here"
          rows={5}
        />
       
        {this.state.task.length >= 10 && (
          <div>
            {!this.state.editMode && (
              <button onClick={this.addTask}>Add Task</button>
            )}
            {this.state.editMode && (
              <button onClick={this.updateTask}>Update Task</button>
            )}
          </div>
        )}
         <PureTodoListBox
          tasks={this.state.allTasks}
          editTask={this.state.editTask}
          onDeleteItem={this.onDeleteItem}
          onEditItem={this.onEditItem}
        />
      </div>
    );
  }
}

export default TodoList;
// Babel
