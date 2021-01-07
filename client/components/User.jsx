import React from 'react';
import $ from 'jquery';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',//default view
      title: 'Calendar',
    }
  }

  logout() {
    $.post('/logout', {session: this.props.user.session}, () => window.location.assign('/'))
  }

  render() {
    return <div>
      <img src={this.props.user.image} />
      <p>{this.props.user.username}</p>
      <button onClick={this.logout.bind(this)}>Logout</button>
      <img src='../../images/menu.png' />
      <div>{this.state.title}</div>
      <div>{this.state.view}</div>
      <p>motovational quote</p>
    </div>;
  }
}

export default User;