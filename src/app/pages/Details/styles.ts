import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: grid;
  gap: ${(props) => props.theme.unit}px;
  > div {
    min-height: 42px;
    border: solid 1px;
    border-radius: ${(props) => props.theme.unit / 4}px;
    padding: ${(props) => props.theme.unit / 2}px;
    min-width: 280px;
    display: grid;
    gap: 4px;
    div{
      line-height: 1;
    }
    h4{
      line-height: 1;
    }
  }
`;
