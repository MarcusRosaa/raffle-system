import {
  Container, List, ListItem, Navigation, Logotipo, Wrapper,
} from './styles';

export default function Header() {
  const links = [
    {
      text: 'Sorteios',
      path: '/sorteios',
    },
    {
      text: 'Ganhadores',
      path: '/ganhadores',
    },
    {
      text: 'Meus Números',
      path: '/pedidos',
    },
    {
      text: 'Sobre',
      path: '/sobre',
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Logotipo>Logotipo</Logotipo>
        <Navigation>
          <List>
            {links.map((link) => (
              <ListItem key={link.path}>
                <a href={link.path}>{link.text}</a>
              </ListItem>
            ))}
          </List>
        </Navigation>
      </Wrapper>
    </Container>
  );
}
