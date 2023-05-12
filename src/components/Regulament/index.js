import React from 'react';
import { Title } from '../WinnersContainer/styles';
import { Separator } from '../RafflesContainer/styles';
import { Container, Text } from './styles';

export default function Regulament() {
  return (
    <Container>
      <Title>REGULAMENTO DO SORTEIO</Title>
      <Separator />
      <p className="subtitle">Leia com atenção!</p>

      <Text>
        ⍟ NÚMEROS SORTEADOS PELA LOTERIA FEDERAL ⍟

      </Text>
      <Text>
        USAMOS OS NÚMEROS DO PRIMEIRO PRÊMIO DA LOTERIA FEDERAL COMO BASE

      </Text>
      <Text>
        O SORTEIO SÓ SERÁ REALIZADO APÓS A VENDA DE 100% DAS COTAS
      </Text>
    </Container>
  );
}
