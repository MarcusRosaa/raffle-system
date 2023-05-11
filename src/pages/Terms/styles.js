import { styled } from 'styled-components';

export const Container = styled.main`
  padding: 60px 16px;
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

  ul {
    list-style: none;
    margin-bottom: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;


    li {
      margin-bottom: 10px;
    }
  }
`;
