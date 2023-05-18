import { styled } from 'styled-components';

export const Container = styled.div`
  background: #1C1C1C;
  border-radius: 6px;
  border: 1px solid #6c6c6c;
  padding: 24px 12px;
  margin: 20px 0px;
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

export const Error = styled.div`
  width: 100%;
  padding: 8px;
  background: ${({ theme }) => theme.colors.danger.main}30;
  color: ${({ theme }) => theme.colors.danger.light};
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
  margin-top: 12px;
`;

export const QuantitySelector = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  gap: 12px;

  button.selector {
    background-color: red;
    padding: 9px;
    line-height: 0;
    color: white;
    background-color: #1C1C1C;
    border-radius: 4px;
    border: 1px solid #6c6c6c50;
    flex: 5;

    @media (min-width: 768px) {
      padding: 6px;
    }

    svg  {
      width: 20px;
      height: 20px;

      path{
      stroke-width: .5px;
      }
    }
  }
`;

export const QuantityField = styled.input`
  background-color: ${({ theme }) => theme.colors.gray.dark};
  border: 1px solid #6c6c6c50;
  height: 34px;
  color: white;
  border-radius: 4px;
  flex: 90;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  line-height: 0;
  font-weight: 600;
  text-align: center;

  outline: none;
`;

export const BuyButton = styled.button`
  padding: 12px;
  background: ${({ theme }) => theme.colors.green.pdp};
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  width: 100%;
  margin-top: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 4px;
    width: 20px;
    height: 20px;
  }
`;
