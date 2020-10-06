import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  gap: ${(props) => props.theme.unit}px;
`;
