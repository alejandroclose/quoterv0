import React, { Component } from "react";
import auth from "../lib/auth-service";
// import { AuthConsumer } from '../components/AuthProvider';

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    auth
      .login({ username, password })
      .then(user => {
        this.props.setUser(user);
      })
      .catch(error => console.error(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="login-page">
              <form onSubmit={this.handleFormSubmit} class="card login is-rounded">
                <div className="card-content">
                  <h1 className="title">
                    <img src="" alt="logo" width="200" />
                  </h1>
                  <div className="control">
                  <input className="input" type="text" name="username" value={username} onChange={this.handleChange} placeholder="username"/>
                    <div class="control">
                    <input className="input" type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" />
                    </div>
                    <div className="control">
                      <input type="submit" value="Login" class="button is-success is-medium is-fullwidth is-outlined"/>
                    </div>
                    <div className="">Don't have an account? <a href="/signup">Signup</a></div>
                  </div>
                </div>
              </form>

      </div>

      // <div className="test">
      //   <form onSubmit={this.handleFormSubmit}>
      //   <label>Username:</label>
      //   <input type="text" name="username" value={username} onChange={this.handleChange}/>
      //   <label>Password:</label>
      //   <input type="password" name="password" value={password} onChange={this.handleChange} />
      //   <input type="submit" value="Login" />
      // </form>
      // </div>
    );
  }
}

export default Login;
