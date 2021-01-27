import styled from 'styled-components';
import theme from './theme.js';

export default {
  Wrap: styled.div`
    justify-content: center;
    height: 100px;
  `,

  Inner: styled.div`
    flex-direction: column;
    justify-content: space-evenly;
    margin: 2px;
  `,

  Label: styled.div`
    justify-content: flex-end;
  `,

  Input: styled.input`
    height: 25%;
    text-align: center;
  `,
}