import React from 'react';
import {
  Container, Product, ProductCarousel, ProductContent, Wrapper,
} from './styles';
import Regulament from '../../components/Regulament';
import TermsContent from '../../components/TermsContent';
// import Carousel from '../../components/Carousel';

export default function ProductPage() {
  return (
    <Container>
      <Wrapper>
        <Product>
          <ProductCarousel>
            {/* <Carousel /> */}
            CARRROSEL AQUI
          </ProductCarousel>

          <ProductContent>
            content
          </ProductContent>
        </Product>
        <Regulament />
      </Wrapper>
      <TermsContent />
    </Container>
  );
}
