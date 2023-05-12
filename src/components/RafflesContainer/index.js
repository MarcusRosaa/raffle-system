import { BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  CardList, Container, Image, ItemStatus, ItemTitle, ListItem, Separator, Subtitle, Title, Wrapper,
} from './styles';

import RafflesData from '../../mock/Raffles';

export default function RafflesContainer() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <BsBookmark />
          Grandes Prêmios
        </Title>
        <Separator />
        <Subtitle>Seu sonho bem pertinho de você</Subtitle>

        <CardList>
          {
            RafflesData[0].raffles.map((raffle) => (
              <ListItem key={raffle.id}>
                <Link to="/sorteios/:id">
                  <div className="ThumbContainer">
                    <Image src={raffle.imageUrl} />
                  </div>
                  <div className="InfosContainer">
                    <ItemStatus stock={raffle.stock > 0}>
                      <p>{raffle.stock > 0 ? 'Disponível' : 'Indisponível'}</p>
                    </ItemStatus>
                    <ItemTitle>{raffle.title}</ItemTitle>
                  </div>
                </Link>
              </ListItem>
            ))
          }
        </CardList>
      </Wrapper>
    </Container>
  );
}
