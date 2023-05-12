import { FaHourglassHalf, FaCheckCircle } from 'react-icons/fa';
import purchasersData from '../../mock/Purchasers';
import {
  ContentContainer,
  ThumbContainer,
  Title,
} from '../Purchases/styles';

import {
  Container,
  Wrapper,
  TopInfos,
  StatusMessage,
  RaffleDetails,
  // Quantity,
  // RafflesNumbers,
  // UnitPrice,
  // Price,
  Info,
  Price,
} from './styles';

export default function PurchaseDetails() {
  return (
    <Container>
      <Wrapper>
        <TopInfos>
          <h1>{purchasersData[0].id}</h1>
          <p>
            Detalhes do seu pedido efetuado no dia
            {' '}
            {purchasersData[0].purchase_date}
          </p>
          <StatusMessage>
            <span>
              {purchasersData[1].purchase_status ? <FaCheckCircle /> : <FaHourglassHalf /> }
            </span>
            <div>
              {purchasersData[1].purchase_status
                ? (<h2>PAGAMENTO APROVADO!</h2>)
                : (<h2>RESERVA REALIZADA!</h2>)}
              {purchasersData[1].purchase_status
                ? (<p>Agora é so esperar sair o resultado e boa sorte!</p>)
                : (<p>Garanta seu número efetuando o pagamento em até 30 minutos!</p>)}
            </div>
          </StatusMessage>
        </TopInfos>

        <RaffleDetails>
          <ThumbContainer>
            <img src={purchasersData[0].imageUrl} alt="imagem da rifa" />
          </ThumbContainer>
          <ContentContainer>
            <Title>
              {purchasersData[0].raffle_name}
            </Title>
            <Info>
              Quantidade:
              {' '}
              <span>
                {purchasersData[0].raffle_totals}
                {' '}
                cotas
              </span>
            </Info>
            <Info>
              Cotas:
              {' '}
              <span>{purchasersData[0].raffle_numbers.join(', ')}</span>
            </Info>
            <Info>
              Valor unitário das cotas:
              {' '}
              <span>{purchasersData[0].price / purchasersData[0].raffle_totals}</span>
            </Info>
            <Price>
              Total:
              {' '}
              <span>{purchasersData[0].price}</span>
            </Price>
          </ContentContainer>
        </RaffleDetails>
      </Wrapper>
    </Container>
  );
}
