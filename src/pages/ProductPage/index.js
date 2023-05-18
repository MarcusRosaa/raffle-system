import React from 'react';
import {
  Container,
  Price,
  Product,
  ProductCarousel,
  ProductContent,
  Wrapper,
  Title,
  InfoSubtitle,
  InfoTitle,
} from './styles';
import Regulament from '../../components/Regulament';
import TermsContent from '../../components/TermsContent';
// import Carousel from '../../components/Carousel';
import RafflesData from '../../mock/Raffles';
import Share from '../../components/Share';
import BuyPack from '../../components/BuyRafflesPack';
import BuyRaffles from '../../components/BuyRaffles';

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
              {RafflesData[0].raffles[0].title}
            </Title>
            <Share />
            <Price>
              R$ 1.99
            </Price>
            <BuyPack />

            <InfoTitle>
              COMPRA AUTOMÁTICA
            </InfoTitle>
            <InfoSubtitle>
              O site escolhe números aleatórios para você.
            </InfoSubtitle>

            <BuyRaffles />
          </ProductContent>
        </Product>
        <Regulament />
      </Wrapper>
      <TermsContent />
    </Container>
  );
}
