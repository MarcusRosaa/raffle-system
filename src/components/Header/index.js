import { useState } from 'react';
import { IoMenuOutline, IoClose } from 'react-icons/io5';
import {
  Container, List, ListItem, Navigation, Logotipo, Wrapper, HamburgerMenu,
} from './styles';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Container>
      <Wrapper>
        <Logotipo>Logotipo</Logotipo>
        <Navigation menuIsOpen={menuIsOpen}>
          <HamburgerMenu onClick={toggleMenu}>
            {menuIsOpen ? <IoClose /> : <IoMenuOutline />}
          </HamburgerMenu>
          <List>
            {links.map((link) => (
              <ListItem key={link.path}>
                <a href={link.path}>{link.text}</a>
              </ListItem>
            ))}
          </List>
        </Navigation>
        <HamburgerMenu onClick={toggleMenu}>
          {menuIsOpen ? <IoClose /> : <IoMenuOutline />}
        </HamburgerMenu>
      </Wrapper>
    </Container>
  );
}
