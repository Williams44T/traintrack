import React from 'react';
import { UserS } from '../styles';
import $ from 'jquery';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultImg: '../../images/user-default-img.jpg',
      view: '',//default view
      title: 'CALENDAR',
    }
  }

  logout() {
    $.post('/logout', {session: this.props.user.session}, () => window.location.assign('/'))
  }

  render() {
    return <UserS.Wrap>
      <UserS.Control>
        <UserS.Img src='../../images/menu.png' />
        <UserS.ViewTitle>{this.state.title}</UserS.ViewTitle>
        <UserS.Profile>
          <UserS.Img src={this.props.user.image || this.state.defaultImg} />
          <UserS.Name>{this.props.user.username}</UserS.Name>
          <button onClick={this.logout.bind(this)}>Logout</button>
        </UserS.Profile>
      </UserS.Control>
      <div>{this.state.view}</div>
      <p>motovational quote</p>
    </UserS.Wrap>;
  }
}

export default User;