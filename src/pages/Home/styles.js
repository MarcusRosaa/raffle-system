import { styled } from 'styled-components';

export const Container = styled.main`
`;

export const Banner = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.gray.dark};
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;
