import React from 'react';
import { Signup, User } from './';
import $ from 'jquery';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordType: 'password',
      username: '',
      password: '',
    }
  }

  handleChange(e) { this.setState({[e.target.name]: e.target.value}) }

  togglePassword() {
    var passwordType = this.state.passwordType === 'text' ? 'password' : 'text';
    this.setState({passwordType});
  }

  login(e) {
    e.preventDefault();
    var user = {
      username: this.state.username,
      password: this.state.password
    };
    $.get('/login', user)
      .done((user) => this.props.switch(<User user={user}/>))
      .fail(() => alert('username or password incorrect'));
  }

  render() {
    return <form>
      <div>
        <label>Username: </label>
        <input type="text" name="username" onChange={this.handleChange.bind(this)}/>
      </div>
      <div>
        <label>Password: </label>
        <input type={this.state.passwordType} name="password" onChange={this.handleChange.bind(this)}/>
      </div>
      <div>
        <label>Show Password: </label>
        <input type="checkbox" onClick={this.togglePassword.bind(this)}/>
      </div>
      <input type="submit" value="Login" onClick={this.login.bind(this)}/>
      <button onClick={() => this.props.switch(<Signup switch={this.props.switch}/>)}
        >I need to sign up first</button>
    </form>
  }
}