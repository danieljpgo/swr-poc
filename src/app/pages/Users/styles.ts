import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;  
`;

export const Content = styled.div`
  display: grid;
  gap: ${(props) => props.theme.unit}px;

  ul {
    justify-self: center;
    text-align: center;
  }
`;
