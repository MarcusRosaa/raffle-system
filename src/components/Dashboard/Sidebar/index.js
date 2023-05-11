import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Title } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <Title>
        <h1>Dashboard</h1>
      </Title>
      <Nav>
        <ul>
          <li>
            <Link to="/dashboard">Início</Link>
          </li>
          <li>
            <Link to="/dashboard/rifas">Rifas</Link>
          </li>
          <li>
            <Link to="/dashboard/compradores">Compradores</Link>
          </li>
          <li>
            <Link to="/dashboard/logout">Sair</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}
