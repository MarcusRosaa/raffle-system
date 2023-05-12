import { styled } from 'styled-components';

export const TermsList = styled.ul`
  list-style: none;
  margin-bottom: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  li {
    margin-bottom: 10px;
  }

  h2 {
    font-size: var(--fsize-l);
    margin-bottom: 12px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.danger.dark};
    letter-spacing: 1px;
  }

  p {
    margin-bottom: 20px;
    font-size: var(--fsize-regular);
    color: white;
  }
`;
