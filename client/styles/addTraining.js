import styled from 'styled-components';
import theme from './theme.js';

export default {
  Wrap: styled.div`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 12.5%;
    left: 12.5%;
    width: 75%;
    height: 75%;
    border: 2px ridge white;
    border-radius: 3%;
    box-shadow: 20px 20px 18px 1px #5e4d4d9c;
    background-color: #30323bfc;
    color: white;
  `,

  Date: styled.div`
  `,

  Title: styled.input`
  `,

  Label: styled.label`
  `,

  Exercise: styled.div`
    flex-direction: column;
  `,

  Name: styled.div`
  `,

  Sets: styled.div`
  `,

  Reps: styled.div`
  `,

  Weights: styled.div`
  `,

  Weight: styled.div`
  `,

}