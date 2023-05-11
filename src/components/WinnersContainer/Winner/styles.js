/* eslint-disable no-nested-ternary */
import { styled } from 'styled-components';

export const ListItem = styled.li`
  color: white;
  display: flex;

  max-width: 100%;

  @media (min-width: 980px) {
    max-width: 50%;
  }

  @media (min-width: 1120px) {
    max-width: 40%;
  }

  border: 1px solid #292929;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray.light};

  & + & {
    margin-top: 16px;
  }

  .ThumbContainer {
    width: 130px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #292929;

    svg {
      width: 45px;
      height: auto;
      color: ${({ place }) => (
    place === '1' || place === '' ? '#FFC107'
      : place === '2' ? '#c0c0c0'
        : place === '3' && '#A97142')
};
    }
  }

  .InfosContainer {
    width: calc(100% - 130px);
    padding: 10px;
  }

  a {
    display: flex;
    text-decoration: none;
    color: inherit;
  }
`;

export const Image = styled.img`
  display: block;
  border-radius: 4px;
  width: 100%;
  height: 100%;
`;

export const ItemStatus = styled.span`
  display: block;
  width: 100%;
  text-align: end;

  p {
    padding: 2px 6px;
    border-radius: 12px;
    min-width: 19px;
    text-align: center;
    width: fit-content;
    display: inline-block;
    font-size: var(--fsize-xs);
    font-weight: 600;

    color: black;

  background: ${({ place }) => (
    place === '1' || place === '' ? '#FFC107'
      : place === '2' ? '#c0c0c0'
        : place === '3' && '#A97142')
};
  }
`;

export const ItemTitle = styled.p`
  margin-top: 8px;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const ItemName = styled.p`

`;

export const ItemSmall = styled.small`
  margin-top: 8px;
  display: block;
`;
