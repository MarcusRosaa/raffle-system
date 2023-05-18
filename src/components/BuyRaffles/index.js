import React, { useState } from 'react';
import { CgMathPlus, CgMathMinus, CgShoppingCart } from 'react-icons/cg';
// import { Link } from 'react-router-dom';
import {
  Container,
  Discount,
  Error,
  List,
  ListItem,
  QuantityField, QuantitySelector, BuyButton,
} from './styles';
import RafflesData from '../../mock/Raffles';

export default function BuyRaffles() {
  // eslint-disable-next-line no-unused-vars
  const [quantityTobuy, setQuantitytoBuy] = useState(1);

  return (
    <Container>
      <p>
        {quantityTobuy}
        {' '}
        x
        {' '}
        R$
        {' '}
        {RafflesData[0].raffles[0].price}
        {' '}
        =
        {' '}
        <b>
          R$
          {' '}
          {RafflesData[0].raffles[0].price * quantityTobuy}
        </b>
      </p>
      {RafflesData[0].raffles[0].discount > 0 && quantityTobuy >= 1 && (
      <Discount>
        Com desconto de R$
        {
        (RafflesData[0].raffles[0].discount
          * (RafflesData[0].raffles[0].price
            * quantityTobuy)) / 100
        }
      </Discount>
      )}
      <Error>A quantidade máxima de números por pedido é 40.</Error>
      <p className="preSelectTitle">Selecione múltiplas quantidades em um clique</p>
      <List>
        <ListItem>
          + 05 SELECIONAR
        </ListItem>
        <ListItem>
          + 10 SELECIONAR
        </ListItem>
        <ListItem>
          + 15 SELECIONAR
        </ListItem>
        <ListItem>
          + 20 SELECIONAR
        </ListItem>
      </List>
      <QuantitySelector>
        <button className="selector" type="button">
          <CgMathPlus />
        </button>
        <QuantityField />
        <button className="selector" type="button">
          <CgMathMinus />
        </button>
      </QuantitySelector>

      <BuyButton>
        Comprar
        {' '}
        <CgShoppingCart />
        {' '}
      </BuyButton>
    </Container>
  );
}
