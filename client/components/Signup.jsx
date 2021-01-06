import React from 'react';
import $ from 'jquery';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordType: 'password',
      nameAvailable: null,
      usernameInfo: null,
      username: '',
      password: '',
      email: '',
    };
  }

  togglePassword() {
    var passwordType = this.state.passwordType === 'text' ? 'password' : 'text';
    this.setState({passwordType});
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  checkUsername(e, next=()=>{}) {
    if (this.state.username === '') {
      return this.setState({
        nameAvailable: null,
        usernameInfo: null
      }, next);
    }
    if (e) { e.preventDefault(); }
    $.get('/users', {username: this.state.username, checkusername: true}, (users) => {
      this.setState({
        nameAvailable: users.length === 0 ? true : false,
        usernameInfo: users.length === 0 ? <p>' {this.state.username} ' is available</p> : <p>' {this.state.username} ' is not available</p>
      }, next);
    });
  }

  checkPassword() {
    if (this.state.password.length < 5) { return `Your password should be at least 5 characters long, but probably longer!` }
  }

  checkEmail() {
    //I'm sure there is a proper way to do this, but, for now, here goes:
    if (this.state.email.length > 1000) { return `Um, your email is a bit too long`; }
    var requiredChars = ['@', '.']
    for (var i = 0; i < requiredChars.length; i++) {
      var char = requiredChars[i];
      if (!this.state.email.includes(char)) { return `I'm no email expert, but I think it needs a '${char}' in there somewhere!`; }
    }
  }

  signup(e) {
    e.preventDefault();
    var passErrMsg = this.checkPassword();
    var emailErrMsg = this.checkEmail();
    this.checkUsername(null, ()=> {
      if (!this.state.nameAvailable) { alert(`' ${this.state.username} ' is not available. Sorry!`); }
      if (passErrMsg) { alert(passErrMsg); }
      if (emailErrMsg) { alert(emailErrMsg); }
      if (!this.state.nameAvailable || passErrMsg || emailErrMsg) { return; }

      var user = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      };
      $.post('/users', user, () => window.location.assign('/'));
    });
  }

  render () {
    return (<form>
      <div>
        <label>Username: </label>
        <input type="text" name="username" onChange={this.handleChange.bind(this)}/>
        <button onClick={this.checkUsername.bind(this)}>Check Username</button>
      </div>
      {this.state.usernameInfo}
      <div>
        <label>Password: </label>
        <input type={this.state.passwordType} name="password" onChange={this.handleChange.bind(this)}/>
      </div>
      <div>
        <label>Show Password: </label>
        <input type="checkbox" onClick={this.togglePassword.bind(this)}/>
      </div>
      <div>
        <label>Email: </label>
        <input type="text" name="email" onChange={this.handleChange.bind(this)}/>
      </div>
      <input type="submit" value="Signup" onClick={this.signup.bind(this)}/>
    </form>);
  }
};

export default Signup;