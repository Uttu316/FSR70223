import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      sec: 0,
    };
  }
  componentDidMount() {
    console.log("Child mounted");
    const interval = setInterval(() => {
      console.log("hello");
      this.setState({
        sec: this.state.sec + 1,
      });
    }, 1000);
    this.setState({
      timer: interval,
    });

    window.addEventListener("resize",this.onResize);
  }
  static getDerivedStateFromProps(props, state) {

    return {
      sec: props.count === 4 ? 1000 : state.sec,
    };
  }
  componentDidUpdate() {
    console.log("Child Updated");
  }
  //   shouldComponentUpdate(nextProps) {
  //     if (nextProps.userList != this.props.userList) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  onResize=(e)=>{
    console.log(e);
  }

  componentWillUnmount() {
    console.log("Child Unmounting");
    window.removeEventListener("resize",this.onResize);
    clearInterval(this.state.timer);
  }
  render() {
    const { userList } = this.props;
    console.log("Child", this.props);
    return (
      <div>
        <h2>{this.state.sec}</h2>
        {Array.isArray(userList) &&
          userList.map((i, index) => <p key={index}>{i}</p>)}
      </div>
    );
  }
}

export default UserList;
