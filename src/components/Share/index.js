import {
  FaWhatsapp, FaFacebook, FaTelegram, FaTwitter,
} from 'react-icons/fa';
import { Container } from './styles';

export default function Share() {
  return (
    <Container>
      <a target="_blank" href="/" rel="noreferrer">
        <FaFacebook />
      </a>

      <a href="/" target="_blank" rel="noreferrer">
        <FaTelegram />
      </a>

      <a target="_blank" href="/" rel="noreferrer">
        <FaTwitter />
      </a>

      <a target="_blank" href="/" rel="noreferrer">
        <FaWhatsapp />
      </a>

      <p>Promoção!</p>
      <small>Compre mais barato!</small>
    </Container>
  );
}
