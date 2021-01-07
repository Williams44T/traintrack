import React from 'react';
import { Loading, Calendar } from './';
import { UserS } from '../styles';
import $ from 'jquery';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultImg: '../../images/user-default-img.jpg',
      view: <Loading/>,
      title: 'CALENDAR',
    }
  }

  switchViews(view) { this.setState({view}) }

  componentDidMount() { this.switchViews(<Calendar user={this.props.user} />) }

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
      {this.state.view}
      <p>motovational quote</p>
    </UserS.Wrap>;
  }
}

export default User;