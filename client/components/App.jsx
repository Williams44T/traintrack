import x from './' //components
import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    $.get('/users', (data) => this.setState({user: data[0]}));
  }

  render() {
    console.log('user', this.state.user);
    return (<div>
      <h1>TRAINTRACKS</h1>
      {this.state.user ? <x.User user={this.state.user}/> : <x.Signup />}
    </div>);
  }
}

export default App;