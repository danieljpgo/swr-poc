import styled from 'styled-components';

export const Container = styled.button`
  width: min-content;
  height: min-content;
  text-transform: uppercase;
  border-width: 1px;
  border-radius: ${(props) => props.theme.unit / 4}px;
  padding: ${(props) => props.theme.unit / 8}px ${(props) => props.theme.unit / 2}px;
`;
