import React, { Component } from "react";
import UserList from "./userList";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
    };
  }

  

  getData() {
    setTimeout(() => {
      //setData
      console.log("Data Arrived");
      this.setState({
        data: ["Nagma", "Raja", "Jainendra"],
      });
    }, 2000);
  }
  componentDidMount() {
    console.log("I am mounted in DOM");
    this.getData();
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props,this.state)
    if (nextState.count > 6) {
      return false;
    } else {
      return true;
    }
  }
  //   getSnapshotBeforeUpdate(prevPops,prevState){
  //     console.log(prevState,this.state)
  //   }
  componentDidUpdate() {
    console.log("Update has done successfully");
  }
  onBtnClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Welcome to Life Cycle Component</h1>
        {this.state.count > 2 && this.state.count <= 5 && (
          <UserList count={this.state.count} userList={this.state.data} />
        )}
        <button onClick={this.onBtnClick}>Count {this.state.count}</button>
      </div>
    );
  }
}
export default LifeCycle;
