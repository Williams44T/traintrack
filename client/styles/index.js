import { createGlobalStyle } from 'styled-components';

export { default as AppS } from './app.js';

var Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export { Global };
