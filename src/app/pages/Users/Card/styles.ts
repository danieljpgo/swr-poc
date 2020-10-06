import styled, { css } from 'styled-components';

interface ContainerProps {
  $loading: boolean;
}

export const Container = styled.li<ContainerProps>`
  display: flex;
  border: solid 1px;
  border-radius: ${(props) => props.theme.unit / 4}px;
  padding: ${(props) => props.theme.unit / 2}px;
  min-width: 280px;
  justify-content: space-between;
  > div {
    display: flex;
    gap: ${(props) => props.theme.unit / 2}px;
    align-items: center;
    > div {
      font-size: 12px;
    }
  }

  ${(props => props.$loading && css`
    pointer-events: none
  `)}
`;
