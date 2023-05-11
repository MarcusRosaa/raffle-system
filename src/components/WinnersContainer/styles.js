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

  .RaffleWrapper {
    margin-bottom: 28px;
  }

  h2.RaffleTitle {
    margin-bottom: 20px;
  }
`;

export const Separator = styled.div`
  width: 118px;
  height: 4px;
  display: block;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.green.main};
  margin: 4px 0;
`;
