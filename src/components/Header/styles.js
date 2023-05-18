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
  position: fixed;
  z-index: 999;
  right: 0;
  top: 0;
  margin: 0;
  padding: 16px 0 32px 32px;
  height: 100%;
  width: 100%;
  max-width: 300px;
  background: ${({ theme }) => theme.colors.gray.light};
  border: 1px solid #6666667a;

  display: ${({ menuisopen }) => (
    menuisopen
      ? 'block'
      : 'none'
  )};

  @media (min-width: 980px) {
    display: block;
    border: none;
    position: relative;
    background: none;
    max-width: 100%;
    padding: 0;
  }

  ul {
    display: flex;
    padding: 0;
    flex-direction: column;
    margin: 0;

    @media (min-width: 980px) {
    flex-direction: row;
    justify-content: flex-end;
  }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;

export const ListItem = styled.li`
  padding: 16px 0;

  @media (min-width: 980px) {
    margin-left: 48px;
    padding: 0;

  }

  a {
    text-decoration: none;
    color: white;
    font-size: var(--fsize-regular);
    font-weight: 700;
    text-transform: uppercase;
    transition: color .1s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.green.main};
    }
  }
`;

export const HamburgerMenu = styled.span`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: end;
  padding-right: 16px;


  @media (min-width: 980px) {
    display: none;
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;
