import styled from 'styled-components';

export const Container = styled.div`
  /* justify-content: center; */
  text-align: center;
  grid-auto-rows: min-content;
  height: 30vh;
  ul{
  overflow-y: auto;
    display: grid;
    gap: ${(props) => props.theme.unit / 2}px;
    padding: ${(props) => props.theme.unit}px ${(props) => props.theme.unit / 2}px;
  }
`;
