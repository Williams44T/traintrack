import React from 'react';
import { CalendarS } from '../styles';
import $ from 'jquery';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: (new Date).getMonth(),
      headers: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    }
    this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  render() {
    return <CalendarS.Wrap>
      <CalendarS.Control>
        <CalendarS.Menu/>
        <CalendarS.Panel>
          <button>test</button>
          <CalendarS.Date>{this.months[this.state.date]}</CalendarS.Date>
          <button>test</button>
        </CalendarS.Panel>
      </CalendarS.Control>
      <CalendarS.Headers>
        {this.state.headers.map(header => <CalendarS.Header>{header}</CalendarS.Header>)}
      </CalendarS.Headers>
    </CalendarS.Wrap>;
  }
}

export default Calendar;