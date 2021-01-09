import styled from 'styled-components';
import theme from './theme.js';

export default {
  Wrap: styled.div`
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 15px;
  `,

  Title: styled.h1`
    margin-right: auto;
    margin-left: ${theme.space.horz};
    font-family: ${theme.font.family.header};
  `,
}