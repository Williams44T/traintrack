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
    $.get('/sessions', (data) => this.setState({user: data}));
  }

  render() {
    return (<div>
      <h1>TRAINTRACKS</h1>
      {this.state.user ? <x.User user={this.state.user}/> : <x.Signup />}
    </div>);
  }
}

export default App;