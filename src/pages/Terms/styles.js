import { styled } from 'styled-components';

export const Container = styled.main`
  padding: 60px 0;
  font-size: 18px;
  color: #333;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.colors.gray.light};

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
