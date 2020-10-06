import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  gap: ${(props) => props.theme.unit}px;
    > div {
      display: grid;
      gap: ${(props) => props.theme.unit / 2}px;
    }
    button {
      align-self: flex-end;
    }

  @media(max-width: 920px) {
    flex-wrap: wrap;

    > div{
      width: 100%;
    }
    button {
      align-self: flex-end;
      justify-content: flex-end;
    }
  }
`;
