import React from 'react';
import { Day } from './';
import { CalendarS } from '../styles';
import { getCalendar } from '../helpers';
import $ from 'jquery';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      view: 'month',
      days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    };
    this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  }

  changeDate(e) {
    e.preventDefault;
    var date = this.state.date;
    if (this.state.view === 'week') {
      e.target.value === 'next' ? date.setDate(date.getDate() + 7) : date.setDate(date.getDate() - 7)
    } else {
      e.target.value === 'next' ? date.setMonth(date.getMonth() + 1) : date.setMonth(date.getMonth() - 1)
    }
    this.setState({date});
  }

  changeView(e) {
    e.preventDefault;
    if (e.target.value === "today") { this.setState({date: new Date()})}
    this.setState({[e.target.id]: e.target.value});
  }

  render() {
    var calendar = getCalendar(new Date(this.state.date), this.state.view, this.state.days);
    calendar = calendar.map((week, i) => {
      return <CalendarS.Week key={i}>{week.map((date, i) => {
        return <Day key={i} day={date} view={this.state.view} />
      })}</CalendarS.Week>;
    });

    return <CalendarS.Wrap>
      <CalendarS.Control>
        {/* <CalendarS.Menu src="../../images/menu.png" /> */}
        <select id="view" onChange={this.changeView.bind(this)}>
          <option value="month">MONTH</option>
          <option value="week">WEEK</option>
          <option value="today">TODAY</option>
        </select>
        <CalendarS.Panel>
          <button value="prev" onClick={this.changeDate.bind(this)}>{'<'}</button>
          <CalendarS.Date>{`${this.months[this.state.date.getMonth()]} ${this.state.date.getFullYear()}`}</CalendarS.Date>
          <button value="next" onClick={this.changeDate.bind(this)}>{'>'}</button>
        </CalendarS.Panel>
        <CalendarS.Menu src="../../images/menu.png" />
      </CalendarS.Control>
      <CalendarS.Headers>
        {this.state.days.map((day, i) => <CalendarS.Header key={i}>{day}</CalendarS.Header>)}
      </CalendarS.Headers>
      {calendar}
    </CalendarS.Wrap>;
  }
}