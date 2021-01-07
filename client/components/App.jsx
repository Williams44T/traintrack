import React from 'react';
import { Loading, Signup, Login, User } from './';
import { Global, AppS } from '../styles';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: <Loading/>,
    };
  }

  switchViews(view) { this.setState({view}); }

  componentDidMount() {
    $.get('/users', (users) => {
      if (users.length > 0) {
        this.switchViews(<User user={users[0]}/>);
      } else {
        this.switchViews(<Login switch={this.switchViews.bind(this)}/>)
      }
    });
  }

  render() {
    return <AppS.Wrap>
      <Global />
      <AppS.Title>TRAINTRACKS</AppS.Title>
      {this.state.view}
    </AppS.Wrap>
  }
}

export default App;