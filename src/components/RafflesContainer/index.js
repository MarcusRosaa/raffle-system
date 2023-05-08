import { BsBookmark } from 'react-icons/bs';
import {
  CardList, Container, Image, ItemStatus, ItemTitle, ListItem, Subtitle, Title, Wrapper,
} from './styles';

export default function RafflesContainer() {
  const RafflesResponseData = [
    {
      id: '1',
      title: 'grandes prêmios',
      subtitle: 'Seu sonho bem pertinho de você',
      raffles: [
        {
          id: '1',
          title: '1° GOL G4 1.0 COMPLETÃO / 2° IPHONE 13 LACRADO OU 4K.. SÃO 2 CHANCES DE GANHAR!',
          price: '122,00',
          thumb: 'https://placehold.co/160x160',
          stock: '0',
        },
        {
          id: '2',
          title: '1° GOL G4 1.0 COMPLETÃO / 2° IPHONE 13 LACRADO OU 4K.. SÃO 2 CHANCES DE GANHAR!',
          price: '12.800,00',
          thumb: 'https://placehold.co/160x160',
          stock: '1000',
        },
        {
          id: '3',
          title: '1° GOL G4 1.0 COMPLETÃO / 2° IPHONE 13 LACRADO OU 4K',
          price: '5',
          thumb: 'https://placehold.co/160x160',
          stock: '200',
        },
      ],
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Title>
          <BsBookmark />
          Grandes Prêmios
        </Title>
        <Subtitle>Seu sonho bem pertinho de você</Subtitle>

        <CardList>
          {
            RafflesResponseData[0].raffles.map((raffle) => (
              <ListItem key={raffle.id}>
                <div className="ThumbContainer">
                  <Image src={raffle.thumb} />
                </div>
                <ItemStatus stock={raffle.stock > 0}>{raffle.stock > 0 ? 'Disponível' : 'Indisponível'}</ItemStatus>
                <ItemTitle>{raffle.title}</ItemTitle>
              </ListItem>
            ))
          }
        </CardList>
      </Wrapper>
    </Container>
  );
}
