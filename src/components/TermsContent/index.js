import React from 'react';
import termsData from '../../mock/Terms';
import { TermsList } from './styles';

export default function TermsContent() {
  return (
    <TermsList>
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
    </TermsList>
  );
}
