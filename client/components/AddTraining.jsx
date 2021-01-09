import React from 'react';
import { } from './';
import { AddTrainingS } from '../styles';
import $ from 'jquery';

export default class AddTraining extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <AddTrainingS.Wrap>
      {this.props.day.getDate()}
    </AddTrainingS.Wrap>;
  }
}