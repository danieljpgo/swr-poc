import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  grid-auto-rows: min-content;
  justify-self: center;
  ul{
    height: 30vh;
    overflow-y: auto;
    display: grid;
    grid-auto-rows: min-content;
    gap: ${(props) => props.theme.unit / 2}px;
    padding: ${(props) => props.theme.unit}px ${(props) => props.theme.unit * 0.75}px;
  }
  @media(max-width: 680px) {
    justify-self: unset;
  }
`;
