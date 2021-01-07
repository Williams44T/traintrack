import styled from 'styled-components';
import theme from './theme.js';

export default {
  Wrap: styled.div`
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: ${theme.color};
  `,

  Control: styled.div`
  width: 50%;
  justify-content: center;
  `,

  Menu: styled.img`
  `,

  Panel: styled.div`
    justify-content: space-between;
    width: 50%;
  `,

  Date: styled.p`
  `,

  Headers: styled.div`
    justify-content: space-evenly;
    width: 100%;
  `,

  Header: styled.div`
  `,

}