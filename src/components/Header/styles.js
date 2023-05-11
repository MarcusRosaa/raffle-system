import { styled } from 'styled-components';

export const Container = styled.header`
  background: black;
  color: white;
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const Logotipo = styled.h1`

`;

export const Navigation = styled.nav`

`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;

export const ListItem = styled.li`

  margin-left: 48px;

  a {
    text-decoration: none;
    color: white;
    font-size: var(--fsize-regular);
    font-weight: 700;
    text-transform: uppercase;
  }
`;
