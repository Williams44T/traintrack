import { createGlobalStyle } from 'styled-components';

export { default as AppS } from './app.js';
export { default as UserS } from './user.js';

var Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
div {
  display: flex;
}
`;

export { Global };
