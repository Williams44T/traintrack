var order = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
import { Day } from '../components';

var getWeek = (date, startDay) => {
  date.setDate(date.getDate() - startDay - 1);
  return [Array(7).fill().map(() => {
    date.setDate(date.getDate() + 1);
    return new Date(date);
  })];
}

var getMonth = (date, startDay) => {
  date.setDate(1);
  var lastDay = new Date(date);
  lastDay.setMonth(date.getMonth() + 1);
  lastDay.setDate(0);
  var dayCount = lastDay.getDate();
  var weekCount = Math.ceil((dayCount + startDay) / 7);
  date.setDate(date.getDate() - startDay - 1);
  return Array(weekCount).fill().map(() => Array(7).fill().map(() => {
    date.setDate(date.getDate() + 1);
    return new Date(date);
  }));
}

var getCalendar = (date, range, customWeek) => {
  var firstDay = new Date(date)
  firstDay.setDate(1);
  var startDay = customWeek.indexOf(order[firstDay.getDay()]);
  var calendar = range === 'week' ? getWeek(date, startDay) : getMonth(date, startDay);
  return calendar;
}

export default getCalendar;