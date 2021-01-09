import React from 'react';
import { AddTraining } from './';
import { DayS } from '../styles';
import $ from 'jquery';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTraining: false,
    };
  }

  toggleAddTraining() { this.setState({addTraining: !this.state.addTraining}) }

  render() {
    var addTraining = this.state.addTraining ? <AddTraining day={this.props.day} /> : null;

    return <DayS.Wrap
      view={this.props.view}
      target={this.props.target.getMonth()}
      actual={this.props.day.getMonth()}
      onClick={this.toggleAddTraining.bind(this)}>
      <DayS.Date>{this.props.day.getDate()}</DayS.Date>
      {addTraining}
    </DayS.Wrap>;
  }
}