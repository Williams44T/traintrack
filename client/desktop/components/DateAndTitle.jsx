import React from 'react';
import { } from './';
import { DateAndTitleS } from '../styles';
import $ from 'jquery';

export default class DateAndTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var pad = (num) => String(num).length < 2 ? '0' + num : num;
    var day = this.props.day
    var date = `${day.getFullYear()}-${pad(day.getMonth() + 1)}-${pad(day.getDate())}`

    return <DateAndTitleS.Wrap>
      <DateAndTitleS.Inner>
        <DateAndTitleS.Label>Date: </DateAndTitleS.Label>
        <DateAndTitleS.Label>Title: </DateAndTitleS.Label>
      </DateAndTitleS.Inner>
      <DateAndTitleS.Inner>
        <DateAndTitleS.Input type="date" defaultValue={date}/>
        <DateAndTitleS.Input type="text"/>
      </DateAndTitleS.Inner>
    </DateAndTitleS.Wrap>
  }
}