import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray.dark};
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: white;
  display: flex;
  align-items: center;

  svg {
    stroke: ${({ theme }) => theme.colors.green.main};
    stroke-width: .5px;
    margin-right: 4px;

    path {
      fill: ${({ theme }) => theme.colors.green.main};
      font-weight: bold;
    }
  }
`;

export const Subtitle = styled.p`
  color: white;
`;

export const CardList = styled.ul`
  color: white;
  list-style: none;
  padding: 32px 0 0 0;
`;

export const ListItem = styled.li`
  color: white;
  display: flex;
  max-width: 100%;

  @media (min-width: 980px) {
    max-width: 50%;
  }

  @media (min-width: 1120px) {
    max-width: 40%;
  }

  border: 1px solid #292929;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray.light};

  & + & {
    margin-top: 24px;
  }

  .ThumbContainer {
    width: 130px;
    height: 130px;
  }

  .InfosContainer {
    width: calc(100% - 130px);
    padding: 10px;
  }

  a {
    display: flex;
    text-decoration: none;
    color: inherit;
    width: 100%;
  }
`;

export const Image = styled.img`
  display: block;
  border-radius: 4px;
  width: 100%;
  height: 100%;
`;

export const ItemStatus = styled.span`
  display: block;
  width: 100%;
  text-align: end;

  p {
    padding: 2px 6px;
    border-radius: 12px;
    width: fit-content;
    text-align: end;
    display: inline-block;
    font-size: var(--fsize-xs);
    font-weight: 600;

    background: ${({ theme, stock }) => (
    stock ? theme.colors.green.light : theme.colors.danger.light
  )};

    color: ${({ theme, stock }) => (
    stock ? theme.colors.green.dark : theme.colors.danger.dark
  )};
  }
`;

export const ItemTitle = styled.p`
  margin-top: 8px;
  line-height: 20px;
`;

export const Separator = styled.div`
  width: 118px;
  height: 4px;
  display: block;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.green.main};
  margin: 4px 0;
`;
