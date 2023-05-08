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
`;

export const Subtitle = styled.p`
  color: white;
`;

export const CardList = styled.ul`
  color: white;
`;

export const ListItem = styled.li`
  color: white;
`;

export const Image = styled.img`
`;

export const ItemStatus = styled.span`
`;

export const ItemTitle = styled.p`
`;
