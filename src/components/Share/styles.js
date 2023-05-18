import { styled } from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: inline-flex;
  vertical-align: top;
  flex-wrap: wrap;
  max-width: 220px;

  a {
    padding: 8px 8px 5px;
    border-radius: 4px;
    background: red;
    margin-right: 8px;
    align-items: center;
    justify-content: center;
    width: fit-content;
    display: inline-block;

    &:nth-child(1) {
      background: #4267B2;
    }

    &:nth-child(2) {
      background: #2989CC;
    }

    &:nth-child(3) {
      background: #32A1F2;
    }

    &:nth-child(4) {
      background: #33D366;
    }

    svg {
      width: 24px;
      height: 24px;
      color: white;
    }
  }

  p {
    font-size: var(--fsize-xl);
    color: white;
    width: 100%;
    margin: 16px 0 2px;
  }

  small {
    width: 100%;
    font-size: var(--fsize-s);
    color: ${({ theme }) => theme.colors.gray.lighter};
  }
`;
