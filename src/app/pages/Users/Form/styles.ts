import styled from 'styled-components';

export const Container = styled.form`
display: flex;
gap: ${(props) => props.theme.unit}px;
  > div {
    display: grid;
    gap: ${(props) => props.theme.unit / 2}px;
    label{
      line-height: 1;
    }
    input {
      border-width: 1px;
      border-radius: ${(props) => props.theme.unit / 4}px;
      padding: ${(props) => props.theme.unit / 8}px ${(props) => props.theme.unit / 2}px;
      line-height: 1;
    }
  }
  
  button {
    height: min-content;
    align-self: flex-end;
    width: min-content;
    text-transform: uppercase;
    border-width: 1px;
    border-radius: ${(props) => props.theme.unit / 4}px;
    padding: ${(props) => props.theme.unit / 8}px ${(props) => props.theme.unit / 2}px;
  }
`;
