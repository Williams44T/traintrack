import styled from 'styled-components';
import theme from './theme.js';

export default {
  Wrap: styled.div`
    align-items: center;
    flex-direction: column;
    width: 100%;
  `,

  Control: styled.div`
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,

  ViewTitle: styled.p`
    font-size: ${theme.font.med};
  `,

  Profile: styled.div`
    align-items: center;
    flex-direction: column;
    margin-right: ${theme.space.horz};
  `,

  Img: styled.img`
    height: 5em;
    width: 5em;
  `,

  Name: styled.p`
    font-size: ${theme.font.small};

  `,
}