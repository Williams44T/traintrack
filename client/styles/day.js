import styled from 'styled-components';
import theme from './theme.js';

export default {
  Wrap: styled.div`
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: ${props => props.view === 'month' ? '80px': '400px'};
    margin: 4px;
    border-radius: 10px;
    background-color: ${props => {
      if (props.view === 'week' || (props.view === 'month' && props.target === props.actual)) {
        return theme.colors.card;
      } else {
        return '#b8b8d7';
      }
    }}
  `,

  Date: styled.div`
    justify-content: flex-end;
    width: 100%;
    padding: 2px;
    font-size: ${theme.font.small};
  `,

}