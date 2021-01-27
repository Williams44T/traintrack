import React from 'react';
import { AddTraining } from './';
import { DayS } from '../styles';
import $ from 'jquery';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTraining: false,
      onClick: this.toggleAddTraining.bind(this),
    };
    this.toggleAddTraining = this.toggleAddTraining.bind(this);
  }

  toggleAddTraining() {
    this.setState({
      addTraining: !this.state.addTraining,
      onClick: this.state.onClick === null ? this.toggleAddTraining : null,
    });
  }

  render() {
    var addTraining = this.state.addTraining ? <AddTraining onClick={this.toggleAddTraining} day={this.props.day} /> : null;

    return <DayS.Wrap
      view={this.props.view}
      target={this.props.target.getMonth()}
      actual={this.props.day.getMonth()}
      onClick={this.state.onClick}>
      <DayS.Date>{this.props.day.getDate()}</DayS.Date>
      {addTraining}
    </DayS.Wrap>;
  }
}