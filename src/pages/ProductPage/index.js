import React from 'react';
import {
  Container, Product, ProductCarousel, ProductContent, Wrapper,
} from './styles';
import Regulament from '../../components/Regulament';
import TermsContent from '../../components/TermsContent';
import { Title } from '../../components/WinnersContainer/styles';
// import Carousel from '../../components/Carousel';
import RafflesData from '../../mock/Raffles';

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
            <Title>
              {RafflesData[0].title}
            </Title>
            <Medias>
                <div className="flex items-center">
                  <a target="_blank" href="/" className="p-2 bg-[#4267B2] flex items-center justify-center rounded cursor-pointer mr-1" rel="noreferrer">
                    <i className="fab fa-facebook text-white text-2xl" aria-hidden="true" />
                  </a>
                  <a target="_blank" href="/" className="p-2 bg-[#0088CC] flex items-center justify-center rounded cursor-pointer mr-1" rel="noreferrer">
                    <i className="fab fa-telegram text-white text-2xl" aria-hidden="true" />
                  </a>

                  <a href="/" target="_blank" className="p-2 bg-[#1DA1F2] flex items-center justify-center rounded cursor-pointer mr-1" rel="noreferrer">
                    <i className="fab fa-twitter text-white text-2xl" aria-hidden="true" />
                  </a>

                  <a target="_blank" href="/" className="p-2 bg-[#25D366] flex items-center justify-center rounded cursor-pointer mr-1" rel="noreferrer">
                    <i className="fab fa-whatsapp text-white text-2xl" aria-hidden="true" />
                  </a>
                </div>
            </Medias>
            <Price>
              1.99
            </Price>
          </ProductContent>
        </Product>
        <Regulament />
      </Wrapper>
      <TermsContent />
    </Container>
  );
}
