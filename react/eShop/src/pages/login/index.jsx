import React, { Component } from "react";
import { login } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      apiStatus: "",
    };
  }

  onChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    // validation
    const { username, password } = this.state;
    if (username && password) {
      const data = {
        username,
        password,
      };
      this.setState({ apiStatus: "loading" });
      login(data)
        .then(({ data }) => {
          console.log(data, "Login SuccessFull");
        })
        .catch((err) => {
          console.log(err.response.status);
          const status = err.response.status;
          this.setState({ password: "" });
          if (status === 401) {
            console.log("User is not valid");
          }
        })
        .finally(() => {
          this.setState({ apiStatus: "" });
        });
    }
  };
  render() {
    const { apiStatus } = this.state;
    const isLoading = apiStatus === "loading";
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label for="username">Username</label>
            <input
              value={this.state.username}
              onChange={this.onChangeInput}
              name="username"
              id="username"
              disabled={isLoading}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              value={this.state.password}
              disabled={isLoading}
              name="password"
              id="password"
              type={"password"}
              onChange={this.onChangeInput}
            />
          </div>

          <button disabled={isLoading}>
            {isLoading ? "Wait for a moment" : "Login"}
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
