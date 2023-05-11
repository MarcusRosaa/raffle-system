import { styled } from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gray.light};
  color: white;

  ul {
    list-style: none;
    padding-left: 0;

    li {
      color: white;
      border-top: 1px solid ${({ theme }) => theme.colors.gray.dark};
      cursor: pointer;


      &:hover {
        a {
          transform: scale(1.1);
        }
      }

      a {
        padding: 16px 32px;
        display: block;
        width: 100%;
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        font-weight: 600;
        font-size: var(--fsize-s);
        transition: transform 0.1s ease-in-out;
      }
    }
  }
`;

export const Title = styled.div`
  padding: 16px;
`;

export const Nav = styled.nav`

`;
