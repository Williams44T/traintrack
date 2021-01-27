import { createGlobalStyle } from 'styled-components';

export { default as AppS } from './app.js';
export { default as UserS } from './user.js';
export { default as CalendarS } from './calendar.js';
export { default as DayS } from './day.js';
export { default as AddTrainingS } from './addTraining.js';
export { default as DateAndTitleS } from './dateAndTitle.js';
export { default as AddExerciseS } from './addExercise.js';

var Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'sans-serif';
}

div {
  display: flex;
}
`;

export { Global };
