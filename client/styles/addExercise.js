import styled from 'styled-components';
import theme from './theme.js';

export default {
  Wrap: styled.div`
    flex-direction: column;
    align-items: center;
    width: 75%;
    margin: ${theme.space.exerciseForm};
  `,

  NumInput: styled.input`
    width: 50px;
    text-align: right;
  `,

  Sets: styled.div`
    flex-wrap: wrap;
  `,

  Set: styled.div`
    flex-direction: column;
  `,

  SetNum: styled.div`
    justify-content: center;
  `,

}