import { styled } from 'styled-components';

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.gray.dark};
  padding: 60px 0;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Title = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const Product = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  @media (min-width: 780px) {
    flex-direction: row;
  }
`;

export const ProductContent = styled.div`
  width: 100%;

  @media (min-width: 780px) {
    width: 50%
  }
`;

export const ProductCarousel = styled.div`
  width: 100%;

  @media (min-width: 780px) {
    width: 50%
  }

  .bigImage {
    max-width: 500px;
    width: 100%;
  }

  .thumb {
    width: 100%;
    max-width: 40px;
  }
`;

export const Price = styled.p`
  width: fit-content;
  display: inline-flex;
  padding: 11px 13px;
  background: ${({ theme }) => theme.colors.green.pdp};
  border-radius: 6px;
  color: white;
  flex-direction: column;
  float: right;

  @media (min-width: 780px) {
  }
`;

export const InfoTitle = styled.p`
  font-size: var(--fsize-xl);
  font-weight: bold;
  text-transform: uppercase;
  color: white;

  border-left: 8px solid white;
  border-radius: 6px;
  line-height: 35px;

  padding-left: 6px;
`;

export const InfoSubtitle = styled.p`
  color: white;
  margin: 8px 0;
`;
