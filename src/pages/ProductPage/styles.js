import { styled } from 'styled-components';

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.gray.dark};
  padding: 16px 0;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Product = styled.div`
  display: flex;
  align-items: start;
`;

export const ProductContent = styled.div`
  width: 50%;
`;

export const ProductCarousel = styled.div`
  width: 50%;
  
  .bigImage {
    max-width: 500px;
    width: 100%;
  }

  .thumb {
    width: 100%;
    max-width: 40px;
  }
`;
