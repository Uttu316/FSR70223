import React from "react";
import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLiked:false,
    };
    this.toggleLikeButton = this.toggleLikeButton.bind(this)
  }

  getMyName() {
    const name = "Utarsh Gupta";
    return `My Name is ${name}`;
  }

  toggleLikeButton() {
    const isLiked = !this.state.isLiked;

   this.setState({
    isLiked,
   })

  }

  render() {
    const {isLiked} = this.state;
    return (
      <div>
        <p> Hello I am Class Component {this.getMyName()}</p>
        <button  onClick={this.toggleLikeButton}>{isLiked?"UnLike":"Like"}</button>
      </div>
    );
  }
}

export default ClassComponent;
