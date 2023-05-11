import { BsTrophy } from 'react-icons/bs';
import {
  ItemName, ItemSmall, ItemStatus, ItemTitle, ListItem,
} from './styles';

/* eslint-disable react/prop-types */
export default function Winner({ winner }) {
  return (
    <ListItem
      key={winner.id}
      place={winner.place}
    >
      <div className="ThumbContainer">
        <BsTrophy />
      </div>
      <div className="InfosContainer">
        <ItemStatus place={winner.place}>
          <p>{winner.place ? winner.place : 'vencedor único'}</p>
        </ItemStatus>
        <ItemTitle>{winner.description}</ItemTitle>
        <ItemName>{winner.name}</ItemName>
        <ItemSmall>
          Números:
          {' '}
          {winner.numbers.join(', ')}
        </ItemSmall>
      </div>
    </ListItem>
  );
}
