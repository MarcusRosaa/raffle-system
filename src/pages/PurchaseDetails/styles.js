import { styled } from 'styled-components';

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.gray.dark};
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const TopInfos = styled.div`
  h1 {
    font-size: 24px;
    text-transform: uppercase;
    color: white;
    margin-bottom: 8px;

    + p {
      color: ${({ theme }) => theme.colors.gray.lighter};
      font-size: var(--fsize-s);
    }
  }
`;

export const StatusMessage = styled.div`
  background: black;
  color: white;
  margin: 12px 0;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    svg {
      color: ${({ theme }) => theme.colors.green.main};
      width: 24px;
      height: 24px;
    }
  }

  h2 {
    font-size: var(--fsize-regular);
    margin-bottom: 4px;
    font-weight: 500;
  }

  p {
    font-size: var(--fsize-s);
  }
`;

export const RaffleDetails = styled.div`
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.colors.gray.lighter};
  font-size: var(--fsize-s);
  max-width: 600px;
`;

export const Info = styled.p`
  font-weight: 600;
  margin-bottom: 4px;

  span {
    font-weight: 500;
  }
`;

export const Price = styled.p`
  color: white;
  font-weight: 600;

  span {
    font-weight: 500;
  }
`;
