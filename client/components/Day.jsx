import React from 'react';
import { } from './';
import { DayS } from '../styles';
import $ from 'jquery';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <DayS.Wrap
      view={this.props.view}
      target={this.props.target.getMonth()}
      actual={this.props.day.getMonth()}>
      <DayS.Date>{this.props.day.getDate()}</DayS.Date>
    </DayS.Wrap>;
  }
}