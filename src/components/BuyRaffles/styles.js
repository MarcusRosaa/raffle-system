import { styled } from 'styled-components';

export const Container = styled.div`
  background: #1C1C1C;
  border-radius: 6px;
  border: 1px solid #6c6c6c;
  padding: 24px 12px;
  margin: 20px 0 30px;
  width: 100%;
  color: white;

  p {
    text-align: center;
  }

  .preSelectTitle {
    margin: 16px 0 28px;
  }
`;

export const Discount = styled.div`
  text-align: center;
  margin-top: 4px;
  font-size: var(--fsize-s);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  width: calc(25% - 8px);
  text-align: center;
  line-height: 25px;

  background: #1C1C1C;
  border-radius: 6px;
  border: 1px solid #6c6c6c;
  padding: 8px;
  cursor: pointer;
`;
