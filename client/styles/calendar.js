import styled from 'styled-components';
import theme from './theme.js';

export default {
  Wrap: styled.div`
    align-items: center;
    flex-direction: column;
    width: 100%;
  `,

  Control: styled.div`
    width: 100%;
    justify-content: space-between;
  `,

  Menu: styled.img`
    width: 40px;
    height: 40px;
  `,

  Panel: styled.div`
    justify-content: space-between;
    align-items: center;
    width: 50%;
  `,

  Date: styled.p`
  `,

  Headers: styled.div`
    justify-content: space-evenly;
    width: 100%;
    font-size: ${theme.font.small};
  `,

  Header: styled.div`
    width: 100%;
    justify-content: center;
  `,

  Week: styled.div`
  justify-content: space-around;
  width: 100%;
  `,

}