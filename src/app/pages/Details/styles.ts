import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: grid;
  gap: ${(props) => props.theme.unit}px;

  button{
    width: min-content;
    text-transform: uppercase;
    border-width: 1px;
    border-radius: ${(props) => props.theme.unit / 4}px;
    padding: ${(props) => props.theme.unit / 8}px ${(props) => props.theme.unit / 2}px;
  }
`;



