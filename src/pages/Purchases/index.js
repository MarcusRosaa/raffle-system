/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import purchasersData from '../../mock/Purchasers';

import {
  ContentContainer,
  Date,
  Input,
  MainContainer,
  NotFound,
  Price,
  Qunatity,
  See,
  Status,
  ThumbContainer,
  Title,
  TitleForm,
} from './styles';

export default function Purchases() {
  const [phone, setPhone] = useState('');
  const [raffles, setRaffles] = useState([]);
  const [alreadySearched, setAlreadySearched] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    setAlreadySearched(true);
    // Assuming you have an API endpoint to search for raffles by phone number
    if (purchasersData.length > 0) {
      setRaffles(purchasersData);
    } else {
      setRaffles([]);
    }
  };

  return (
    <MainContainer>
      <form onSubmit={handleSearch} noValidate>
        <TitleForm>
          <h3>Buscar Pedidos</h3>
          <p>Nos informe o número de telefone para consultar informações sobre os seus pedidos.</p>
        </TitleForm>
        <Input>
          <label htmlFor="phone-input">Telefone *</label>
          <input
            type="tel"
            id="phone-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </Input>
      </form>

      {raffles.length > 0 && (
        <ul>
          {raffles.map((raffle) => (
            <Link to="/pedidos/:id">
              <li key={raffle.id}>
                <ThumbContainer>
                  <img src={raffle.imageUrl} alt="imagem da rifa" />
                </ThumbContainer>
                <ContentContainer>
                  <Title>
                    {raffle.raffle_name}
                  </Title>
                  <Date>
                    {raffle.purchase_date}
                  </Date>
                  <Qunatity>
                    Quantidade de cotas:
                    <span>{raffle.raffle_totals}</span>
                  </Qunatity>
                  <Price>
                    Valor total:
                    <span>{raffle.price}</span>
                  </Price>
                  <Status approved={raffle.purchase_status}>
                    Status do pedido:
                    <span>{raffle.purchase_status ? 'Aprovado' : 'Pendente'}</span>
                  </Status>
                </ContentContainer>
                <See>
                  Ver pedido
                  {' '}
                  <BsArrowRight />
                </See>
              </li>
            </Link>
          ))}
        </ul>
      )}

      {!raffles.length && alreadySearched && (
        <NotFound>Não foram encontradas rifas compradas para este número.</NotFound>
      )}

    </MainContainer>
  );
}
