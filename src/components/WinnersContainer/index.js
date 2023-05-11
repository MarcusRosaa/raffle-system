import { BsTrophy } from 'react-icons/bs';
import {
  CardList, Container, Separator, Subtitle, Title, Wrapper,
} from './styles';

import winnersData from '../../mock/Winners';
import Winner from './Winner';

export default function WinnersContainer() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <BsTrophy />
          Ganhadores
        </Title>
        <Separator />
        <Subtitle>Últimos ganhadores dos sorteios</Subtitle>

        <CardList>
          {winnersData.map((raffle) => (
            <div key={raffle.id} className="RaffleWrapper">
              <h2 className="RaffleTitle">{raffle.title}</h2>
              {raffle.winners.length > 0 ? (
                raffle.winners.map((winner) => (
                  <Winner key={winner.id} winner={winner} />
                ))
              ) : (
                <p>Nenhum vencedor registrado.</p>
              )}
            </div>
          ))}
        </CardList>
      </Wrapper>
    </Container>
  );
}
