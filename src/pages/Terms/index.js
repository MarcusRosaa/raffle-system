import React from 'react';

import termsData from '../../mock/Terms';
import { Container } from './styles';

export default function Terms() {
  return (
    <Container>
      <ul>
        {termsData.map((term) => (
          <li key={term.number}>
            <h2>
              {term.number}
              {' '}
              -
              {' '}
              {term.description}
            </h2>
            <p>{term.content}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
