import RafflesContainer from '../../components/RafflesContainer';
import { Banner, Container, Image } from './styles';

export default function Home() {
  return (
    <Container>
      <Banner>
        <Image src="https://placehold.co/1800x650" />
      </Banner>

      <RafflesContainer />
    </Container>
  );
}
